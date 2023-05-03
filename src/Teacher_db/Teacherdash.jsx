import React, { useState } from 'react'
import Teachhome from './Teachhome'
import Teachsidebar from './Teachsidebar'

const Teacherdash = () => {
    const [toggle,setToggle]=useState(true)
    const Toggle=()=>{
        setToggle(!toggle)
    }
  return (
    <div className='container-fluid  min-vh-100'  style={{backgroundColor:"#282C34"}}>
        <div className='row'>
           {toggle && <div className='col-2 bg-white vh-100 position-fixed'>
           <Teachsidebar/>
            </div>}
            {toggle &&<div className='col-2'></div>}
            <div className='col'>
             <Teachhome Toggle={Toggle}/>
            </div>
        </div>
        
    </div>
  )
}

export default Teacherdash