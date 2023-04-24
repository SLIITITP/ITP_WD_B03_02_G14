import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';






function AllStudent(){

  /*
    const [students, setStudents] = useState([]); 
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/Student/"); 
        setStudents(response.data);
      }
      console.log()
      fetchData();
    }, []);



    function handleDelete(studentId) {
        // Send a DELETE request to the server to delete the student with the given ID
        axios.delete(`http://localhost:8070/Student/delete/${studentId}`)
          .then(() => {
            // Remove the deleted student from the array of students
            setStudents(students.filter(student => student._id !== studentId));
          })
          .catch(err => console.error(err));
      }

      function handleUpdate(student) {
        setSelectedStudent(student);
        setShowForm(true);
      }
    
      function handleCloseForm() {
        setSelectedStudent(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1>All student</h1>


            <table class="table">
  <thead class="table-dark">
  <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Image</th>
          <th></th>
        </tr>
    
  </thead>
  <tbody>
  {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>
            <Avatar alt="Remy Sharp" src={student.image} sx={{ width: 40, height: 40 }}/>

              </td>
            <td>
            
                
                
                <Link to={`/edit/${student._id}`} className='btn btn-success my-3'><ModeEditIcon/> edit </Link> 

                
                  
                  <Link to={`/report/${student._id}`} className='btn btn-success my-3'><VisibilityIcon/>View </Link> 
                  <button  onClick={() => handleDelete(student._id)}class="btn btn-success" > <DeleteIcon/>Delete</button>
                </td>
          </tr>
        ))}
    
  </tbody>
</table>





      
    

        </div>
    )
*/
return(
  <h1>HR MANAGEMENT DASHBOARD</h1>
)

}
export default AllStudent;