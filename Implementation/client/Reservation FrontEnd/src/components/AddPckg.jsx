import { Box, Button, FormLabel, TextField, Checkbox,FormControlLabel } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddPckg = () => {
  const histroy = useNavigate();
  const [errors, setErrors] = useState({});

  //db conn
  const [inputs, setInputs] = useState({
    pid: '',
    category: '',
    name: '',
    overview: '',
    duration: '',
    itininary: '',
    accomodation: '',
    price: '',
    image: '',
  });

  //define available
  const [checked, setChecked] = useState(false);

  //define handleChange
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
 
    
  //create request to db
  const sendRequest = async() => {
    await axios.post("http://localhost:5000/packages", {
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
    }).then(res => res.data);

  }

  //define handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInputs(inputs));
    console.log("Inputs:", inputs);
    console.log("Errors:", errors);
    console.log(inputs, checked);
    sendRequest().then(() => histroy('/packages'))
  };

  const validateInputs = (values) => {
    let errors = {};

    if (!values.pid) {
      errors.pid = "Package ID is required";
    }

    if (!values.category) {
      errors.category = "Category is required";
    }

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.overview) {
      errors.overview = "Overview is required";
    }

    if (!values.duration) {
      errors.duration = "Duration is required";
    }

    if (!values.itininary) {
      errors.itininary = "Itininary is required";
    }

    if (!values.accomodation) {
      errors.accomodation = "Accomodation is required";
    }

    

    if (!values.image) {
      errors.image = "Image is required";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
    <Box 
    display= "flex" 
    flexDirection="column" 
    justifyContent={'center'} 
    maxWidth={800}
    alignContent={"center"}
    alignSelf={""}
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={10}
    marginBottom={10}
    >

    <FormLabel>Notice  ID</FormLabel>
    <TextField value={inputs.pid} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="pid"/>
    
    <FormLabel>Title</FormLabel>
    <TextField value={inputs.category} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="category"/>

    <FormLabel>Author</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>

    <FormLabel>Discription</FormLabel>
    <TextField value={inputs.overview} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="overview"/>

   
    <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined"  name="image"/>

   
    <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>publish</Button>
    </Box>
  </form>
  )
}

export default AddPckg;