import React,{useState} from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';


function AddDriver(){
  const navigate = useNavigate();
    const [empid,setempid]=useState("");
    const [name,setname]=useState("");
    const [email,setEmail]=useState("");
    const [mobile_number,setMobilenumber]=useState("");
    const [NIC,setNIC]=useState("");
    const [gender,setgender]=useState("");
    const [location,setlocation]=useState("");
    const [license_number,setlicense_number]=useState("");
    const [lexpire_date,setlexpire_date]=useState("");
    const [image,setImage]=useState("");
    
    



        const newdriver ={
            empid,
            name,
            email,
            mobile_number,
            NIC,
            gender,
            location,
            license_number,
            lexpire_date, 
            image

        };
        function convertToBase64(e) {
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
            
          };
          reader.onerror = (error) => {
            console.log("Error: ", error);
          };
        }




        const submit =async(e) =>{
            e.preventDefault();



            try{
              
                alert("susses");
                axios.post("http://localhost:8070/driver/add",newdriver)
                navigate("/driver");

            }
            catch(e){
                console.log(e);


            }
    

        }

        
        

    return(
<div className="container">
 
        <form action="post">

        <div className="mb-3">
    <label for="name" class="form-label">Employee Id</label>
    <input type="text" class="form-control" id="empid"  onChange={(e)=>{setempid(e.target.value);}}/>
    
  </div>



  <div className="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name"  onChange={(e)=>{setname(e.target.value);}}/>
    
  </div>
 
  <div className="mb-3">
  <label for="email" className="form-label">Email</label>
  <input type="text" className="form-control" id="email" onChange={(e) => {
    const emailRegex = /\S+@\S+\.\S+/; // regular expression for email validation
    const isValidEmail = emailRegex.test(e.target.value); // check if email is valid

    if (isValidEmail) {
      setEmail(e.target.value);
    } else {
      alert('Please enter a valid email address.');
    }
  }} />
</div>

<div className="mb-3">
  <label for="contact number" className="form-label">Contact Number</label>
  <input type="text" className="form-control" id="mobile_number" onKeyPress={(e) => {
    const keyCode = e.which || e.keyCode; // get the key code of the pressed key
    const keyValue = String.fromCharCode(keyCode); // convert key code to character

    if (/[^0-9]/.test(keyValue)) { // if the entered character is not a number
      e.preventDefault(); // prevent the character from being entered
    } else {
      let mobileNumber = e.target.value; // get the current value of the input field
      if (mobileNumber.length === 10) { // if 10 numerical characters are entered, prevent further input
        e.preventDefault();
      } else {
        mobileNumber += keyValue; // add the entered character to the input field value
        e.target.value = mobileNumber; // update the input field value
      }
    }
  }} />
</div>

  <div className="mb-3">
  <label for="NIC" className="form-label">NIC</label>
  <input type="text" className="form-control" id="NIC" onKeyPress={(e) => {
    const keyCode = e.which || e.keyCode; // get the key code of the pressed key
    const keyValue = String.fromCharCode(keyCode); // convert key code to character

    if (/[^0-9]/.test(keyValue)) { // if the entered character is not a number
      e.preventDefault(); // prevent the character from being entered
    } else {
      let nicValue = e.target.value; // get the current value of the input field
      if (nicValue.length === 9 && !/v/i.test(nicValue)) { // if 9 numerical characters are entered, add 'v' at the end
        nicValue += 'v';
      }
      e.target.value = nicValue; // update the input field value
    }
  }} />
</div>

  <div className="mb-3">
  <label for="gender" className="form-label">Gender</label>
  <select className="form-control" id="gender" onChange={(e)=>{setgender(e.target.value);}}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>

<div className="mb-3">
  <label htmlFor="location" className="form-label">Location</label>
  <input type="text" className="form-control" id="location" onChange={(e) => {
    const locationValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/; // regular expression to allow only letters and spaces
    if (!regex.test(locationValue)) { // if entered value contains invalid characters
      e.target.setCustomValidity("Please enter a valid location"); // show error message
    } else {
      e.target.setCustomValidity(""); // remove error message
      setlocation(locationValue); // set location state
    }
  }} />
</div>

  <div className="mb-3">
    <label for="license_number" className="form-label">License Number</label>
    <input type="text" className="form-control" id="license_number"onChange={(e)=>{setlicense_number(e.target.value);}}/>
  </div>

  <div className="mb-3">
    <label for="lexpire_date" className="form-label">License expire date</label>
    <input type="date" className="form-control" id="lexpire_date"onChange={(e)=>{setlexpire_date(e.target.value);}}/>
  </div>

  <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" className="form-control"id="image" onChange={convertToBase64}/>
  
  </div>



  <button type="submit"  onClick={submit} className="btn btn-primary">Submit</button>
</form>





</div>

    );
}
export default AddDriver;