import { Box, Button, Modal, Typography } from '@mui/material';
import axios from "axios";
import React from 'react';
import "./Package.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '50px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  overflow: 'auto',
  p: 4,
};



  const Package = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useNavigate();
  const { _id, pid, category, name, overview, duration, itininary, accomodation, lprice, fprice, image,date} = props.packag;

  //deleteHandler
  const deleteHandler = async() => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      await axios
      .delete(`http://localhost:5000/packages/${_id}`)
      .then(res => res.data)
      .then(() => {
        history("/");
        history("/packages");
        toast.success('Package deleted successfully!');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Error deleting package');
      });
    }
  };

  return (
    <div className='card'>
        <h3 className="bold-heading">{pid}</h3>
        <img src={image} alt={name} />
        <h2 className="bold-italic-heading">{name}</h2>
        <Button 
        onClick={handleOpen}
        sx={{ 
        backgroundColor: "black", 
        color: "#fff", 
        '&:hover': {
        backgroundColor: "#fff",
        color: "#3A1078"
        }
        }}
        >
        View
        </Button>

        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <h3>{pid}</h3>
        {/* <img src={image} alt={name} /> */}
        <h3>{category}</h3>
        <h3>{name}</h3>
        <h3>{date}</h3>
        <p>{overview}</p>
        {/* <article>{duration}</article> */}
        {/* <h2>{itininary}</h2> */}
        {/* <h2>{accomodation}</h2> */}
        {/* <h3>Rs.{lprice} / $ {fprice}</h3> */}

        <Button 
  LinkComponent={Link} 
  to={`/packages/${_id}`} 
  sx={{ 
    mt: "auto",
    backgroundColor: "#3A1078",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#00ff00",
      color: "#3A1078"
    },
    mr: 20 // add margin-right of 16px
  }}
>
  Edit
</Button>


<Button 
  onClick={deleteHandler} 
  sx={{ 
    mt: "auto",
    backgroundColor: "#3A1078",
    color: "#fff",
    '&:hover': {
      backgroundColor: "#ff0000",
      color: "#3A1078"
    },
    ml: 20 // add margin-left of 16px
  }}
>
  Delete
</Button>
</Typography>
</Box>
</Modal>
</div>
        
    </div>
  );
};

export default Package;