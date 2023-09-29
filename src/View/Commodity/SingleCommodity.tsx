import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, Grid } from "@mui/material"
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Common/SideNav";
import { deepPurple } from "@mui/material/colors";

const SingleCommodity = () => {
 
 const { id } = useParams();
 const [student, setStudent] = useState([]);

 useEffect(() => {
  async function getStudent() {
   try {
    const student = await axios.get(`http://localhost:3333/students/${id}`)
    // console.log(student.data);
    setStudent(student.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getStudent();
 }, [id])

 function handleClick() {
  
 }
 return (
  <>
  <Box sx={{ display: 'flex', backgroundColor: '#84ffff' }}>
        <Sidebar />
   
   <Grid item xs={12} md={6}>
  <Box sx={{ textAlign:"center", p:2, mb:2, backgroundColor:"orange"}}>
      <Typography variant="h4"> Commodity List</Typography>
     </Box>
  
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650, backgroundColor: deepPurple }} aria-label="simple table">
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
          
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {"row.name"}
              </TableCell>
              <TableCell align="right">{"row.calories"}</TableCell>
              <TableCell align="right">{"row.fat"}</TableCell>
              <TableCell align="right">{"row.carbs"}</TableCell>
              
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
   </Box>
  </>
 )
}

export default SingleCommodity;