import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPckg = () => {
  const histroy = useNavigate();

  //db conn
  const [inputs, setInputs] = useState({
  
 
    name: '',
    overview: '',
    duration: '',
    itininary: '',
    fprice: '',
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
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/packages", {
      
      
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
    console.log(inputs, checked);
    sendRequest().then(() => {
      toast.success('Package added successfully!');
      histroy('/packages');
    }).catch(() => {
      toast.error('Failed to add package');
    });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
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

          

          <FormLabel>Event Name</FormLabel>
          <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

          <InputLabel id="overview">Location</InputLabel>
          <TextField
            id="overview"
            name="overview"
            value={inputs.overview}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={1}
            fullWidth
            margin="normal"
          />

          <FormLabel>Drade</FormLabel>
          <TextField value={inputs.duration} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name="duration" />

          <InputLabel id="Itininary">Description</InputLabel>
          <TextField
            id="itininary"
            name="itininary"
            value={inputs.itininary}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            margin="normal"
            inputProps={{
              style: { maxHeight: '50px', overflowY: 'auto' },
              rowsMax: 4,
            }}

          />

          <FormLabel>Price</FormLabel>
          <TextField value={inputs.fprice} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="fprice" />

          <FormLabel>Image</FormLabel>
          <TextField value={inputs.image} onChange={handleChange} margin="normal" rows={5} fullWidth variant="outlined" name="image" />

          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
          <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>Submit</Button>
        </Box>
      </form>
    </>
  );
};

export default AddPckg;