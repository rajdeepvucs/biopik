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
interface Commodity {
  id: number;
  title: string;
  type_id: number;
  image_id: number;
}
export default function CommodityView() {
  const [data, setData] = useState<Commodity[]>([]);
  useEffect(() => {
    
    axios.get('http://192.168.1.4:3000/api/v1/commodity')
      .then(response => {
        setData(response.data);
        //setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
       // setLoading(false);
      });
  }, []);
  const handleDelete = async (id:any )=> {
    await axios.put(`http://192.168.1.4:3000/api/v1/deletecommodity/${id}`);
    var newcommodity = data.filter((item :any) => {
     // console.log(item);
     return item.id !== id;
    })
    setData(newcommodity);
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
  {/* <Grid item xs={12} md={4}>
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
  </Grid> */}
  <Grid item xs={12} md={12}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"orange"}}>
      <Typography variant="h4"> Commodity List</Typography>
     </Box>
     <Tabs
  value={ ""}
 
  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example"
>
<Tab value="/addcommodity" label="Add Commodity" to="/addcommodity" component={RouterLink} />
  
</Tabs>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650, backgroundColor: deepPurple[500] }} aria-label="simple table">
  <TableHead>
  <TableRow>
    <TableCell align="center" sx={{ backgroundColor: 'purple', color: 'white' }}>Commodity Id</TableCell>
    <TableCell align="center" sx={{ backgroundColor: 'purple', color: 'white' }}>Commodity Name</TableCell>
    <TableCell align="center" sx={{ backgroundColor: 'purple', color: 'white' }}>Type Id</TableCell>
    <TableCell align="center" sx={{ backgroundColor: 'purple', color: 'white',width: '10px' }}>Image</TableCell>
    <TableCell align="center" sx={{ backgroundColor: 'purple', color: 'white' }}>Action</TableCell>
  </TableRow>
</TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.type_id}</TableCell>
              <TableCell align="right">{row.image_id}</TableCell>
              <TableCell align="right">
  <Tooltip title="View">
  <RouterLink to={`/singlecommodity/${row.id}`}>
      <IconButton>
        <VisibilityIcon color="primary" />
      </IconButton>
      </RouterLink>
  </Tooltip>

           <Tooltip title="Edit">
           <RouterLink to={`/commodityedit/${row.id}`}>
            <IconButton><EditIcon /></IconButton>
            </RouterLink>
           </Tooltip>
           <Tooltip title="Delete">
           <RouterLink to=" ">
            <IconButton onClick={() => handleDelete(row.id)}><DeleteIcon color="secondary" /></IconButton>
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
