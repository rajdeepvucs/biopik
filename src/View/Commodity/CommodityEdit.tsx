import React from 'react';
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@mui/material";
import { deepPurple, green } from '@mui/material/colors';
import { useState, useEffect } from "react";
import Sidebar from '../../Common/SideNav';
import Footer from '../../Common/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CommodityEdit() {
  const { id } = useParams();
  const [commodity, setCommodity] = useState<any>();

 useEffect(() => {
  async function getCommodity() {
   try {
    const response = await axios.get(`http://192.168.1.4:3000/api/v1/singlecommodity/${id}`)
    
    setCommodity(response.data);
   } catch (error) {
    console.log("Something is Wrong");
    
   }
  }
  getCommodity();
 }, [id])
 function onTextFieldChange(e:any) {
  setCommodity({
   ...commodity,
   [e.target.name]: e.target.value
  })
 }
 async function onFormSubmit(e:any) {
  e.preventDefault()
  try {
   await axios.put(`http://192.168.1.4:3000/api/v1/editcommodity/${id}`, commodity)
   
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
   
  return (
    <>
      <Box sx={{ display: 'flex', backgroundColor: '#84ffff' }}>
        <Sidebar />
        <Box textAlign="center" p={2} mb={2}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12} container justifyContent="center" alignItems="center">
              <Box textAlign="center" p={2} mb={2}>
                <Typography variant="h4">Edit Community</Typography>
              </Box>
              {/* <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value="1" disabled />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="title" name="title" variant="outlined" required fullWidth id="title" label="Commodity Name" value={commodity?.title} onChange={e => onTextFieldChange(e)} />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField autoComplete="type_id" name="type_id" variant="outlined" required fullWidth id="type_id" label="Commodity Type Name" value={commodity?.type_id} onChange={e => onTextFieldChange(e)} />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField autoComplete="image_id" name="image_id" variant="outlined" required fullWidth id="image_id" label="Image Id" value={commodity?.image_id} onChange={e => onTextFieldChange(e)} />
                  </Grid>
                </Grid>
                <Box m={3}>
                  <Button type="button" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}> Update </Button>
                </Box>
              </form> */}
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Grid container spacing={2}>
  <Grid item xs={12} md={12} >
      <TextField autoComplete="id" name="id" variant="outlined" required fullWidth  label="Id" value={id} disabled/>
    </Grid>
    <Grid item xs={12} md={12} >
      <TextField autoComplete="title" id="outlined-required" name="title"  required fullWidth  label="Commodity Name"  variant="outlined" value={commodity?.title} onChange={e => onTextFieldChange(e)}/>
      
    </Grid>
    <Grid item xs={12} md={12}>
      <TextField autoComplete="type_id" name="type_id"  required fullWidth id="type_id" label="Commodity Type  Id" variant="outlined" value={commodity?.type_id} onChange={e => onTextFieldChange(e)}/>
    </Grid>
    <Grid item xs={12} md={12}>
      <TextField autoComplete="image_id" name="image_id"  required fullWidth id="image_id" label="Image  Id" variant="outlined" value={commodity?.image_id} onChange={e => onTextFieldChange(e)}/>
    </Grid>
  </Grid>
  <Box m={3}>
    <Button type="submit" variant="contained" color="primary" fullWidth  onClick={e => onFormSubmit(e)} >Add</Button>
  </Box>
</form>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
