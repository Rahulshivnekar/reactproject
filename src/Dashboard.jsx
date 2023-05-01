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
     <div className='upercard'>

    <div class="row">
  <div class="col-sm-4 mb-2 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Total Courses</h5>
        <p class="card-text">we ahve total 6 courses design by proffesional web developers.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Course completed</h5>
        <h2 class="card-text">34</h2>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">certificate earned</h5>
        <h2 class="h2">247</h2>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
     </div>
     
    <div class="card flex" style={{width: '15rem',height:"650px",borderRadius:"20px",backgroundColor:"#6A5BE2",marginBottom:"20px",marginLeft:"20px",color:'white', marginTop:'-170px'}}>
  <div class="card-body">
    <div class="d-grid gap-4">
  <button class="btn btn-light" type="button">Dahboard</button>
  <button class="btn btn-primary" type="button"> All students</button>
  <Link to="/teacher" className='d-grid'><button class="btn btn-primary" type="button">Teachers</button></Link>  

</div>
  </div>
  {/* <div class="card flex" style={{width: '13rem',height:"200px",borderRadius:"20px",margin:"10px"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
  <div style={{width:"80%",margin:'25px'}}>{WithLabelExample()}</div>
</div> */}
 
</div> 
      
      <div className='tab-dash d-flex justify-content-center'>
      <TableContainer component={Paper}>
        <h3 style={{marginLeft:"20px",marginTop:'10px'}}>our courses</h3>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow variant="h5">
            <TableCell variant="h5">Name</TableCell>
            <TableCell align="right">Fees</TableCell>
            <TableCell align="right">duration</TableCell>
            <TableCell align="right">Comment</TableCell>
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
