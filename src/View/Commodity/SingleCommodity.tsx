import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, Grid } from "@mui/material"
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Common/SideNav";
import { deepPurple } from "@mui/material/colors";
import Footer from "../../Common/Footer";
interface Commodity {
  id: number;
  title: string;
  type_id: number;
  image_id: number;
}
const SingleCommodity = () => {
 
 const { id } = useParams();
 const [singlecommodity, setSinglecommodity] = useState<Commodity>();

 useEffect(() => {
  async function getSinglecommodity() {
   try {
    const response = await axios.get(`http://192.168.1.4:3000/api/v1/singlecommodity/${id}`)
    
    setSinglecommodity(response.data);
   } catch (error) {
    console.log("Something is Wrong");
    
   }
  }
  getSinglecommodity();
 }, [id])

 function handleClick() {
  
 }
 return (
  <>
  <Box sx={{ display: 'flex', backgroundColor: '#84ffff' }}>
        <Sidebar />
        <Box sx={{textAlign:"center" , backgroundColor: "deepPurple",p:"2" }}>
      
      
   <Grid item xs={12} md={6}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"orange"}}>
      <Typography variant="h4"> Commodity List</Typography>
     </Box>
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650, backgroundColor: deepPurple }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"sx={{ backgroundColor: 'purple', color: 'white' }}>Commodity Id</TableCell>
            <TableCell align="center"sx={{ backgroundColor: 'purple', color: 'white' }}>Commodity Name</TableCell>
            <TableCell align="center"sx={{ backgroundColor: 'purple', color: 'white' }}>Commodity Type Id</TableCell>
            <TableCell align="center"sx={{ backgroundColor: 'purple', color: 'white' }}>Image Id</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {singlecommodity?.id}
              </TableCell>
              <TableCell align="center">{singlecommodity?.title}</TableCell>
              <TableCell align="center">{singlecommodity?.type_id}</TableCell>
              <TableCell align="center">{singlecommodity?.image_id}</TableCell>
              
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
  <Footer />
   </Box>
   </Box>
  </>
 )
}

export default SingleCommodity;