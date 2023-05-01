import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import BookIcon from '@mui/icons-material/Book';

const Signup = () => {
    let [data, updatedata] = useState({ name: '', email: '', contact: '', password: '' })
    let naviagte=useNavigate();
    function change(e) {
        updatedata({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
        
            <div className='img'>
            
                <div className='std-div'>
                    <p className='student-quoute'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur omnis officiis, nulla provident atque vero minus cumque aliquam voluptatibus sequi sapiente temporibus doloribus est natus labore numquam? Modi, aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem debitis officiis at! Sint, magni cupiditate. Sit esse illo soluta expedita animi assumenda totam quibusdam adipisci cum aspernatur, recusandae exercitationem consequuntur!</p>
                </div>
                <div className='userps'>

                    <div className='' style={{ width: '22rem' }}>
                        <form className='form-control' onSubmit={(e) => {
                            e.preventDefault();
                            async function signup() {
                                let res = await axios.post('https://studentapi-c8py.onrender.com/registration//', data)

                                if (res.status === 201) {
                                    alert('sucessfully signed up');
                                    naviagte('/dashboard');
                                }
                            }
                            signup()
                        }}>
                            <h3 class="card-title text-center">Sign in</h3><br></br>
                            Name<input type="text" name="name" value={data.name} onChange={change} className='form-control' /><br></br>
                            Email<input type="email" name="email" value={data.email} onChange={change} className='form-control' />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div><br></br>
                            Password<input type="text" name="password" value={data.password} onChange={change} className='form-control' /><br></br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                <label class="form-check-label" for="flexCheckIndeterminate">
                                    i agreed to all T&C
                                </label>
                            </div>
                            
                            <button className='btn btn-success my-4 text-center d-grid gap-2 col-4 mx-auto'>Sign Up</button>
                            
                            {/* <Link to='/dashboard' className=''>go to dsh board</Link> */}
                            <div class="d-grid  col-9 mx-5">
                            <div id="emailHelp" class="form-text mx-3">Dont have an Account?<Link to='/'>sign up</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to='/dashboard'>
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
     
     <Fab variant="extended" size="medium" color="primary" aria-label="add">
     <BookIcon/>
       view Courses
     </Fab>
   </Box>
   </Link>
                </div>
               
        </>
    )
}

export default Signup