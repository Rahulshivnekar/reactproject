import React from 'react'
import { Link } from 'react-router-dom'
import Asklogout from './Asklogout'
import './style.css'
const Sidebar = () => {
  const asklog=()=>{
    return(
      <Asklogout/>
    )
  }
  return (
    <div className='bg-light sidebar object-fit-contain border rounded p-2 mt-4 ' style={{background:"#282C34"}}>
        <div className='m-2'>
            <i className='bi bi- me-3 fs-4'></i>
            <span className='brand-name fs-4'>Inf<span className='align-top'>o</span>rmation</span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
              <a className='list-group-item py-2 '>
                <i className='bi bi-speedometer2 fs-5 me-3'></i>
                <Link className='link-dark text-decoration-none'><span className='fs-5'>Dashboard</span></Link>
              </a>
              <a className='list-group-item py2'>
                <i className='bi bi-people-fill fs-5 me-3'></i>
                <Link  className='link-dark text-decoration-none' to='/student'><span className='fs-5'>All Student</span></Link>
              </a>
              <a className='list-group-item py2'>
                <i className='bi bi-person-fill-check fs-5 me-3'></i>
                <Link className='link-dark text-decoration-none' to='/teacher'><span className='fs-5'>Teachers</span></Link>
              </a> 
             
              <a className='list-group-item py2'>
                <i className='bi bi-fingerprint fs-5 me-3'></i>
                <span className='fs-5'>Admin Login</span>
              </a> 
              <a className='list-group-item py2'>
                <i className='bi bi-box-arrow-left fs-5 me-3'></i>
                <span className='fs-5'><Asklogout/></span>
              </a> 

        </div>
    </div>
  )
}

export default Sidebar