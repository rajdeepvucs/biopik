import React from 'react';
import Sidebar from '../../Common/SideNav';
import Box from '@mui/material/Box';
import {Typography,Grid,TableContainer,Table,TableBody,TableCell,TableHead,TableRow,Paper,IconButton,Tooltip,TextField,Button, Link }from '@mui/material';
import Footer from '../../Common/Footer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deepPurple,green,orange } from '@mui/material/colors';
import { Link as RouterLink } from 'react-router-dom';

//import IconButton from '@mui/material/IconButton';
//import Tooltip from '@mui/material/Tooltip';
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
export default function CommodityView() {
    
  return( 
  <>
    <Box sx={{ display: 'flex' ,backgroundColor: '#84ffff',}}>
    <Sidebar />
    
    <Box sx={{textAlign:"center" , backgroundColor: "deepPurple",p:"2" }}>
      
        <Typography variant="h4">
        Commodity List 
        </Typography>
        <Grid container spacing={4}>
  <Grid item xs={12} md={6}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"green"}}>
      <Typography variant="h4">Add Commodity</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="commodityname" name="commodityname" variant="outlined" required fullWidth id="commodityname" label="Commodity Name" />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="commodity_type_id" name="commodity_type_id" variant="outlined" required fullWidth id="commodity_type_id" label="Commodity Type  Id" />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="image_id" name="image_id" variant="outlined" required fullWidth id="image_id" label="Image  Id" />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth >Add</Button>
      </Box>
     </form>
  </Grid>
  <Grid item xs={12} md={6}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"orange"}}>
      <Typography variant="h4"> Commodity List</Typography>
     </Box>
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650, backgroundColor: deepPurple[500] }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
  <Tooltip title="View">
  <RouterLink to="/singlecommodity">
      <IconButton>
        <VisibilityIcon color="primary" />
      </IconButton>
      </RouterLink>
  </Tooltip>

           <Tooltip title="Edit">
           <RouterLink to=" /commodityedit">
            <IconButton><EditIcon /></IconButton>
            </RouterLink>
           </Tooltip>
           <Tooltip title="Delete">
           <RouterLink to=" ">
            <IconButton ><DeleteIcon color="secondary" /></IconButton>
            </RouterLink>
           </Tooltip>
           </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>

</Grid>
    
        <Footer />
      </Box>
      
    </Box>
    </>
  );
}
