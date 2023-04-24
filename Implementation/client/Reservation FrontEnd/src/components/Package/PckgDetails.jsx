import { Box, Button, FormLabel, TextField, Checkbox,FormControlLabel } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate, useParams } from 'react-router-dom'

const PckgDetails = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const histroy = useNavigate();
  //console.log(id);

  useEffect(() => {
    const fetchHandler = async() => {
        await axios
        .get(`http://localhost:5000/packages/${id}`)
        .then((res) => res.data)
        .then(data => setInputs(data.package));
    };
    fetchHandler()
    //.then((data) => setInputs(data.packag));
  }, [id]);

  const sendRequest = async() => {
    await axios.put(`http://localhost:5000/packages/${id}`, {
      pid: String(inputs.pid),
      category: String(inputs.category),
      name: String(inputs.name),
      overview: String(inputs.overview),
      duration: String(inputs.duration),
      itininary: String(inputs.itininary),
      accomodation: String(inputs.accomodation),
      lprice: Number(inputs.lprice),
      fprice: Number(inputs.fprice),
      image: String(inputs.image),
      available: Boolean(inputs.checked)
    }).then(res => res.data)
  };

  //define handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => histroy("/packages"));
    };

    //define handleChange
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

  return (

    
    <div>
    {inputs && 
    <form onSubmit={handleSubmit}>

      
    <Box 
    display= "flex" 
    flexDirection="column" 
    justifyContent={'center'} 
    maxWidth={700}
    alignContent={"center"}
    alignSelf={"auto"}
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={10}
    marginBottom={10}
      

    >
    
    <FormLabel>Package ID</FormLabel>
    <TextField value={inputs.pid} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="pid"/>

    <FormLabel>Category</FormLabel>
    <TextField value={inputs.category} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="category"/>

    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>

     <FormLabel>Overview</FormLabel>
    <TextField value={inputs.overview} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="overview"/> 

    {/* <FormLabel>Duration</FormLabel>
    <TextField value={inputs.duration} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name="duration"/> */}

    {/* <FormLabel>Itininary</FormLabel>
    <TextField value={inputs.itininary} onChange={handleChange} margin="normal" fullWidth variant="outlined"  name="itininary"/> */}

    {/* <FormLabel>Accomodation</FormLabel>
    <TextField value={inputs.accomodation} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name="accomodation"/> */}

    {/* <FormLabel>Price in Rs</FormLabel>
    <TextField value={inputs.lprice} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="lprice"/>

    <FormLabel>Price in $</FormLabel>
    <TextField value={inputs.fprice} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="fprice"/> */}

    <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined"  name="image"/>

    {/* <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)}/>}  label="Available" /> */}

    <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>publish</Button>
    </Box>
    </form>}
    </div>
  );
};

export default PckgDetails