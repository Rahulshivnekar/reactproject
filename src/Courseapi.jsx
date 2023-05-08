import axios from 'axios';
import React, { useEffect, useState } from 'react'

    
const Courseapi = () => {
    let [data, updatedata] = useState([]);
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get("https://princestudentapi.onrender.com/Course//")
      updatedata(res.data)
      
    }
    
    
  return (
    <div>
      
         <table class="table caption-top text-light rounded mt-2"> 
      
      
              <caption className='fs-4'>Our courses</caption>
    <thead>
      <tr>
        
        <th scope="col">Courses</th>
        <th scope="col">Fees</th>
        <th scope="col">Duration</th>
        <th scope="col">Comments</th>
  
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
  <div className='d-flex justify-content-center my-4 gap-3'>
  <div class="card  p-3" style={{width: "37rem",marginTop:'25px'}}>
  <div class="card-body">
    <h5 class="card-title">Success rate</h5>
    <h6 class="card-subtitle mb-2 text-muted">hjkvkhvkhv</h6>
    <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>
    
  </div>
</div>
<div class="card" style={{width: "37rem",marginTop:'25px'}}>
  <div class="card-body">
    <h5 class="card-title">Upcoming Events</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Learn more</a>
  </div>
</div>
</div>
    </div>
  )
}

export default Courseapi