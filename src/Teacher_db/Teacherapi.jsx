import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addteacher from './Addteacher';

    
const Teacherapi = () => {
    let [data, updatedata] = useState([]);
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get("https://princestudentapi.onrender.com/Teacher//")
      
      updatedata(res.data)
      
    }
  return (
    <div>
        <div className='mt-4'> 
        <Addteacher className='row g-3 mt-2'/>
        </div>
         <table class="table caption-top text-light rounded mt-2 "> 
      
      
              <caption className='fs-4'>Teachers</caption>
              
    <thead>
      <tr>
        
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Education</th>
        <th scope="col">Experience</th>
        <th scope="col">Contact</th>
        <th scope="col">Current status</th>
      </tr>
    </thead>
    <tbody>
          {data.map((v)=>{
            return(<tr key={v.id} id={v.id}>
              
              <td>{v.teachername}</td>
              <td>{v.teacheremail}</td>
              <td>{v.education}</td>
              <td>{v.workexp}</td>
              <td>{v.teachermobile}</td>
              <td>{v.is_active===true?"yes":"no"}</td>
              
            </tr>)
          })}
        </tbody>
        
  </table>
 <div className='cards'>
 </div>
    </div>
  )
}

export default Teacherapi