import React from 'react';
import Sidebar from '../../Common/SideNav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../../Common/Footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';



export default function CustomerView() {
  const rows: any = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ];
  const handleSaveClick = (row:any) => {
   
  };
  return (
    <>
      <Box sx={{ display: 'flex', backgroundColor: '#84ffff' }}>
        <Sidebar />
        <h1>Customer</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row:any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>
                    <Button variant="contained" onClick={() => handleSaveClick(row)}>
                         Edit
                        </Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Footer />
        </Box>
      </Box>
    </>
  );
}
