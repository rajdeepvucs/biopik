import React, { useEffect, useState } from 'react';
import Sidebar from '../../Common/SideNav';
import Box from '@mui/material/Box';
import {Typography,Grid,TableContainer,Table,TableBody,TableCell,TableHead,TableRow,Paper,IconButton,Tooltip,TextField,Button, Link, Tabs, Tab }from '@mui/material';
import Footer from '../../Common/Footer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deepPurple,green,orange } from '@mui/material/colors';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

//import IconButton from '@mui/material/IconButton';
//import Tooltip from '@mui/material/Tooltip';
// function createData(
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
//   ) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

export default function Addcommodity() {
    const [commodity, setCommodity] = useState({
        title: "",
        type_id: "",
        image_id:""
       });
       const [status, setStatus] = useState(false);
      
       function onTextFieldChange(e:any) {
        setCommodity({
         ...commodity,
         [e.target.name]: e.target.value
        })
       }
      
       async function onFormSubmit(e:any) {
        e.preventDefault()
        try {
            console.log("ad.......",commodity)
         await axios.post(`http://192.168.1.4:3000/api/v1/addcommodity`, commodity)
         setStatus(true);
        } catch (error) {
         console.log("Something is Wrong");
        }
       }
       if (status) {
        return <Addcommodity />
       }
    
  return( 
  <>
    <Box sx={{ display: 'flex' ,backgroundColor: '#84ffff',}}>
    <Sidebar />
    
    <Box sx={{textAlign:"center" , backgroundColor: "deepPurple",p:"2" }}>
      
        <Typography variant="h4">
        Commodity List 
        </Typography>
        <Grid container spacing={4}>
  <Grid item xs={12} md={12}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"green"}}>
      <Typography variant="h4">Add Commodity</Typography>
     </Box>
     <form noValidate>
  <Grid container spacing={2}>
    <Grid item xs={12} md={12} >
      <TextField autoComplete="title" name="title" variant="outlined" required fullWidth id="title" label="Commodity Name" onChange={e => onTextFieldChange(e)}/>
    </Grid>
    <Grid item xs={12} md={12}>
      <TextField autoComplete="type_id" name="type_id" variant="outlined" required fullWidth id="type_id" label="Commodity Type  Id" onChange={e => onTextFieldChange(e)}/>
    </Grid>
    <Grid item xs={12} md={12}>
      <TextField autoComplete="image_id" name="image_id" variant="outlined" required fullWidth id="image_id" label="Image  Id" onChange={e => onTextFieldChange(e)}/>
    </Grid>
  </Grid>
  <Box m={3}>
    <Button type="submit" variant="contained" color="primary" fullWidth  onClick={e => onFormSubmit(e)} >Add</Button>
  </Box>
</form>

  </Grid>
  

</Grid>
    
        <Footer />
      </Box>
      
    </Box>
    </>
  );
}
