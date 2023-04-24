import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';



function AllUser(){
    const [user, setuser] = useState([]); 
    const [selecteduser, setSelecteduser] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/user/"); 
        setuser(response.data);
      }
      console.log()
      fetchData();
    }, []);



    function handleDelete(userId) {
        // Send a DELETE request to the server to delete the user with the given ID
        axios.delete(`http://localhost:8070/user/delete/${userId}`)
          .then(() => {
            // Remove the deleted user from the array of user
            setuser(user.filter(user => user._id !== userId));
          })
          .catch(err => console.error(err));
      }

      function handleUpdate(user) {
        setSelecteduser(user);
        setShowForm(true);
      }
    
      function handleCloseForm() {
        setSelecteduser(null);
        setShowForm(false);
      }



    return(
        <div className="container">
 


            <table class="table"style={{width:'1400px'}}>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>

  <tr>
          
          <th>username</th>
          <th>password</th>
          <th>email</th>
          <th>firstNamee</th>
          <th>lastName</th>
          <th>mobile</th>
          <th>address</th>
          <th>profiler </th>
          
          <th class ="w-100"></th>
          


        </tr>
  </thead>
  <tbody>
  {user.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.email}</td>
            <td>{user.firstNamee}</td>
            <td>{user.lastName}</td>
            <td>{user.mobile}</td>
            <td>{user.address}</td>
            <td>{user.profile}</td>

           <td ><Avatar alt="Remy Sharp" src={user.image} sx={{ width: 60, height: 60 }}/></td> 

            


            <td>

            <Link to={`/edit employee/${user._id}`} className='btn btn-success my-3'><ModeEditIcon/>edit</Link> 
             


                 
                  <button onClick={() => handleDelete(user._id)}class="btn btn-success" ><DeleteIcon/>Delete</button>

                  



                </td>
          </tr>
        ))}
  </tbody>
</table>


    

        </div>
    )

}
export default AllUser;