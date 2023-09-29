import React from 'react';
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@mui/material";
import { deepPurple, green } from '@mui/material/colors';
import { useState, useEffect } from "react";
import Sidebar from '../../Common/SideNav';
import Footer from '../../Common/Footer';

export default function CommodityEdit() {
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
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value="1" disabled />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField autoComplete="commodityname" name="commodityname" variant="outlined" required fullWidth id="commodityname" label="Commodity Name" value="raj" />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField autoComplete="commodity_type_id" name="commodity_type_id" variant="outlined" required fullWidth id="commodity_type_id" label="Commodity Type Name" value="" />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField autoComplete="image_id" name="image_id" variant="outlined" required fullWidth id="image_id" label="Image Id" value="" />
                  </Grid>
                </Grid>
                <Box m={3}>
                  <Button type="button" variant="contained" color="primary" fullWidth> Update </Button>
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
