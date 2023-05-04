import React, { useState } from 'react'
import Stdhome from './Stdhome'
import Stdsidebar from './Stdsidebar'



const Studentdash = () => {
    const [toggle,setToggle]=useState(true)
    const Toggle=()=>{
        setToggle(!toggle)
    }
  return (
    <div className='container-fluid  min-vh-100'  style={{backgroundColor:"#282C34"}}>
        <div className='row'>
           {toggle && <div className='col-2 bg-white vh-100 position-fixed'>
           <Stdsidebar/>
            </div>}
            {toggle &&<div className='col-2'></div>}
            <div className='col'>
             <Stdhome Toggle={Toggle}/>
            </div>
        </div>
        
    </div>
  )
}

export default Studentdash