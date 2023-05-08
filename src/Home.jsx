import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios';
import Courseapi from './Courseapi';




const Home = ({Toggle}) => {
  let [data, updatedata] = useState([]);
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("https://princestudentapi.onrender.com/Course//")
    updatedata(res.data)
    
  }
  var a=data;
  var l=a.length
  
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2' >
                <div className='col-md-3 p-3' >
                  <div className='p-3  shadow-sm d-flex justify-content-around-align-item-center rounded' style={{ 
      backgroundImage: 'linear-gradient(to right, #86efac, #f0fdf5)' 
      
    }}>
                     <div>
                        <h3 className='fs-2'>{l}</h3>
                        <p className='fs-5'>Courses</p>
                     </div>
                     <i className='bi bi-journal-bookmark p3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-3'>
                  <div className='p-3  shadow-sm d-flex justify-content-around-align-item-center rounded' style={{ 
      backgroundImage: 'linear-gradient(to right,#86efac, #f0fdf5)', 
      
    }}>
                     <div>
                        <h3 className='fs-2'>97</h3>
                        <p className='fs-5'>Courses completed</p>
                     </div>
                     <i className='bi bi-book-half p3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-3'>
                  <div className='p-3  shadow-sm d-flex justify-content-around-align-item-center rounded' style={{ 
      backgroundImage: 'linear-gradient(to right, #86efac, #f0fdf5)', 
       
    }}>
                     <div>
                        <h3 className='fs-2'>62</h3>
                        <p className='fs-5'>Certificate Earned</p>
                     </div>
                     <i className='bi bi-sticky-fill p3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-3'>
                  <div className='p-3  shadow-sm d-flex justify-content-around-align-item-center rounded' style={{ 
      backgroundImage: 'linear-gradient(to right, #86efac, #f0fdf5)', 
      
    }}>
                     <div>
                        <h3 className='fs-2'>245</h3>
                        <p className='fs-5'>Community Support</p>
                     </div>
                     <i className='bi bi-check2-all p3 fs-1'></i>
                  </div>
                </div>
            </div>
        </div>
        
<Courseapi/>
    </div>
  )
}

export default Home