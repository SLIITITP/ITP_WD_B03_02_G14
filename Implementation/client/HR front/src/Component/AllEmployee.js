import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';



function AllEmployee(){
    const [employees, setemployees] = useState([]); 
    const [selectedemployees, setSelectedEmployee] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/Employee/"); 
        setemployees(response.data);
      }
      console.log()
      fetchData();
    }, []);



    function handleDelete(employeId) {
        // Send a DELETE request to the server to delete the Employee with the given ID
        axios.delete(`http://localhost:8070/Employee/delete/${employeId}`)
          .then(() => {
            // Remove the deleted Employee from the array of employees
            setemployees(employees.filter(Employee => Employee._id !== employeId));
          })
          .catch(err => console.error(err));
      }

      function handleUpdate(Employee) {
        setSelectedEmployee(Employee);
        setShowForm(true);
      }
    
      function handleCloseForm() {
        setSelectedEmployee(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1>All Employee</h1>
            <Link to={`/add/`} className='btn btn-success my-3'><PersonAddIcon/>add</Link>


            <table class="table"style={{width:'1400px'}}>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>

  <tr>
          
          <th>Employee Id</th>
          <th>password</th>
          <th>email</th>
          <th>name</th>
          <th>Contact Number</th>
          <th>NIC</th>
          <th>Gender</th>
          <th>Employee </th>
          <th>Photo</th>
          <th class ="w-100"></th>
          


        </tr>
  </thead>
  <tbody>
  {employees.map((Employee, index) => (
          <tr key={index}>
            <td>{Employee.username}</td>
            <td>{Employee.password}</td>
            <td>{Employee.email}</td>
            <td>{Employee.name}</td>
            <td>{Employee.mobile_number}</td>
            <td>{Employee.NIC}</td>
            <td>{Employee.gender}</td>
            <td>{Employee.etype}</td>

           <td ><Avatar alt="Remy Sharp" src={Employee.image} sx={{ width: 60, height: 60 }}/></td> 

            


            <td>

            <Link to={`/edit employee/${Employee._id}`} className='btn btn-success my-3'><ModeEditIcon/>edit</Link> 
             


                  <Link to={`/report employee/${Employee._id}`} className='btn btn-success my-3'><VisibilityIcon/>View</Link>
                  <button onClick={() => handleDelete(Employee._id)}class="btn btn-success" ><DeleteIcon/>Delete</button>

                  



                </td>
          </tr>
        ))}
  </tbody>
</table>


    

        </div>
    )

}
export default AllEmployee;