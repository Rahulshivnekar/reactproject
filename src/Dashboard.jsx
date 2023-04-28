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

const Dashboard = () => {
  let [data, updatedata] = useState([]);
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("https://princestudentapi.onrender.com/Course//")
    
    updatedata(res.data)
  }
  
function WithLabelExample() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
}
  

  var total = 0;
  return (
    <>
    
     <Navbar/>
     
    <div class="card flex" style={{width: '18rem',height:"650px",borderRadius:"20px",backgroundColor:"#6A5BE2",marginBottom:"20px",marginLeft:"20px",color:'white'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="d-grid gap-2">
  <button class="btn btn-light" type="button">Dahboard</button>
  <button class="btn btn-primary" type="button">All students</button>
  <button class="btn btn-primary" type="button">Courses</button>

</div>
  </div>
  <div class="card flex" style={{width: '15rem',height:"200px",borderRadius:"20px",margin:"24px"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
  <div style={{width:"80%",margin:'25px'}}>{WithLabelExample()}</div>
</div>
 
</div> 
      
      <div className='tab-dash d-flex justify-content-center'>
      <TableContainer component={Paper}>
        <h3 style={{marginLeft:"20px",marginTop:'10px'}}>our courses</h3>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell align="right">Fees</TableCell>
            <TableCell align="right">duration</TableCell>
            <TableCell align="right">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 10 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.fees}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
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
