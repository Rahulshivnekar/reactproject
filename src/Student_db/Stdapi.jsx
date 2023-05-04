import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent';

    
const Stdapi = () => {
    let [data, updatedata] = useState([]);
    useEffect(() => {
      show();
    });
    async function show() {
      var res = await axios.get("https://princestudentapi.onrender.com/AddStudent//")
      
      updatedata(res.data)
    }
  return (
    <div>
        <Addstudent/>
         <table class="table caption-top text-light rounded mt-2 "> 
      
              
              <caption className='fs-4'>All students</caption>
              
    <thead>
      <tr>
        
        <th scope="col">Name</th>
        <th scope="col">Email</th>
       <th scope='col'>mobile</th>
       <th scope='col'>address</th>
       <th scope='col'>college</th>

       

  
      </tr>
    </thead>
    <tbody>
          {data.map((v)=>{
            return(<tr key={v.id} id={v.id}>
              
              <td>{v.sname}</td>
              <td>{v.semail}</td>
              <td>{v.smobile}</td>
              <td>{v.saddress}</td>
              <td>{v.scollege}</td>
              {/* <td>{v.scourse}</td> */}

              
            </tr>)
          })}
        </tbody>
        
  </table>
 <div className='cards'>
 </div>
    </div>
  )
}

export default Stdapi