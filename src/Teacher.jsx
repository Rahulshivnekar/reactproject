import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Navbar from './Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PanToolIcon from '@mui/icons-material/PanTool';
import Groups2Icon from '@mui/icons-material/Groups2';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  let [data, updatedata] = useState([]);
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("https://princestudentapi.onrender.com/Teacher//")
    
    updatedata(res.data)
  }
  

  

  var total = 0;
  return (
    <>
    
     <Navbar/>
     <div className='upercard'>

    <div class="row container">
  <div class="col-sm-4 mb-2 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Courses</h5>
        <p class="card-text">we ahve total 6 courses design by proffesional web developers.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
     </div>
     
    <div class="card flex" style={{width: '15rem',height:"650px",borderRadius:"20px",backgroundColor:"#6A5BE2",marginBottom:"20px",marginLeft:"20px",color:'white', marginTop:'-170px'}}>
  <div class="card-body">
    <div class="d-grid gap-4">
  <Link to="/dashboard" className='d-grid'><button class="btn btn-primary" type="button">Dahboard</button></Link>
  <button class="btn btn-primary" type="button"> All students</button>
  <Link to="/teacher" className='d-grid'><button class="btn btn-light" type="button">Teachers</button></Link>  

</div>
  </div>
 
 
</div> 
      
      <div className='tab-dash d-flex justify-content-center'>
      <TableContainer component={Paper}>
        <h3 style={{marginLeft:"20px",marginTop:'10px'}}>All teachers</h3>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow variant="h5">
            <TableCell variant="h5">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">Current status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 10 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.teachername}</TableCell>
               <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </>
  );
}

export default Dashboard;
