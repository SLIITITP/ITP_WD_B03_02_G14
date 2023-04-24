import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import './AllDriver.css';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';




function AllDriver() {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8070/driver/");
      setDrivers(response.data);
    }
    fetchData();
  }, []);




  function handleDelete(driverId) {
    axios
      .delete(`http://localhost:8070/driver/delete/${driverId}`)
      .then(() => {
        setDrivers(drivers.filter((driver) => driver._id !== driverId));
      })
      .catch((err) => console.error(err));
  }






  function handleUpdate(driver) {
    setSelectedDriver(driver);
    setShowForm(true);
  }




  function handleCloseForm() {
    setSelectedDriver(null);
    setShowForm(false);
  }



  function searchDrivers(searchTerm) {
    return drivers.filter((driver) => {
      const name = driver.name.toLowerCase();
      const nic = driver.NIC ? driver.NIC.toLowerCase() : '';
      const licenseNumber = driver.license_number ? driver.license_number.toLowerCase() : '';
      const location = driver.location ? driver.location.toLowerCase() : '';
      const searchTermLowerCase = searchTerm.toLowerCase();
      
      
      return (
        name.includes(searchTermLowerCase) ||
        nic.includes(searchTermLowerCase) ||
        licenseNumber.includes(searchTermLowerCase) ||
        location.includes(searchTermLowerCase)
      );
    });
  }

  const searchedDrivers = searchDrivers(searchTerm);

  return (
    <div className="container">
      <h1>All drivers</h1>
      <Link to={`/add driver/`} className="btn btn-success my-3">
        <PersonAddIcon/>Add Driver
      </Link>
      <div className="form-group"><SearchIcon/>
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, NIC, license number, or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} style={{width:'1700px'}}
        />
        
        


      </div>


      <table class="table" style={{width:'1700px'}}>
      <thead class="tab" style={{backgroundColor:'#5091ca'}}>
  <tr>
            
            <th>Employee Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>NIC</th>
            <th>Gender</th>
            <th>Location</th>
            <th>License Number</th>
            <th>Expiration Date</th>
            <th>Photo</th>
            <th></th>
            
            
          </tr>
    
  </thead>
  <tbody>
  {searchedDrivers.map((driver, index) => (
            <tr key={index}>
              <td>{driver.empid}</td>
              <td>{driver.name}</td>
              <td>{driver.email}</td>
              <td>{driver.mobile_number}</td>
              <td>{driver.NIC}</td>
              <td>{driver.gender}</td>
              <td>{driver.location}</td>
              <td>{driver.license_number}</td>
              <td>{driver.lexpire_date}</td>

             
              <td ><Avatar alt="Remy Sharp" src={driver.image} sx={{ width: 60, height: 60 }}/></td> 


              <td>
              <Link to={`/edit driver/${driver._id}`} className='btn btn-success my-3'><ModeEditIcon/>edit</Link>
               
                <Link to={`/report driver/${driver._id}`} className='btn btn-success my-3'><VisibilityIcon/>View</Link>
                <button onClick={() => handleDelete(driver._id)}class="btn btn-success"><DeleteIcon/>Delete</button>

              



              </td>
            </tr>
          ))}
    
  </tbody>
</table>




      
    </div>
  );
}

export default AllDriver;