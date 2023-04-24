import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";






function AllVehical(){
    const [vehical, setVehical] = useState([]); 
    const [selectedvehical, setSelectedvehical] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/vehical/"); 
        setVehical(response.data);
      }
      console.log()
      fetchData();
    }, []);



    

      
      function handleCloseForm() {
        setSelectedvehical(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1 className="text-">All vehical</h1>

            <table>
      <thead>
        <tr>
          <th>category</th>
          <th>model</th>
          <th>Vehical Number</th>
          <th>price</th>
          <th>Hotel type</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {vehical.map((vehical, index) => (
          <tr key={index}>
            <td>{vehical.categorye}</td>
            <td>{vehical.model}</td>
            <td>{vehical.number}</td>
            <td>{vehical.price}</td>
            
           
            
          </tr>
        ))}
      </tbody>
    </table>
    

        </div>
    )

}
export default AllVehical;