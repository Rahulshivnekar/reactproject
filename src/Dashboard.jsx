import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

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
import RecipeReviewCard from './Sidecard';

const Dashboard = () => {
  let [data, updatedata] = useState([]);
  useEffect(() => {
    show();
  });
  async function show()
  {
    var res=await axios.get("https://princestudentapi.onrender.com/Course//");
  
    updatedata(res.data);
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
  <button class="btn btn-light" type="button">Dahboard</button>
  <button class="btn btn-primary" type="button"> All students</button>
  <Link to="/teacher" className='d-grid'><button class="btn btn-primary" type="button">Teachers</button></Link>  

</div>
<hr class="my-6"/>
  </div>
  {/* <div class="card flex" style={{width: '13rem',height:"200px",borderRadius:"20px",margin:"10px"}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    
  </div>
  <div style={{width:"80%",margin:'25px'}}>{WithLabelExample()}</div>
</div> */}
 
</div> 
      
      <div className='tab-dash d-flex justify-content-center'>
      <table className='table table-bordered text-center table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>fees</th>
            <th>duration</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v)=>{
            return(<tr key={v.id} id={v.id}>
              
              <td>{v.name}</td>
              <td>{v.fees}</td>
              <td>{v.duration}</td>
              <td>{v.comments}</td>
              
            </tr>)
          })}
        </tbody>
      </table>
      </div>
      <div className='ml-6'>
      <RecipeReviewCard/>
      </div>
    </>
  );
}

export default Dashboard;
