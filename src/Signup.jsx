import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';


function SignUp() {
  var navigate=useNavigate();
  let [data,updatedata]=useState({name:'',email:'',contact:'',password:''});
  function change(e){
    updatedata({...data,[e.target.name]:e.target.value})
  }
  
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
            <div className="featured-image mb-3">
              <img src="" className="img-fluid" style={{ width: '250px' }} />
            </div>
            <p className="text-white fs-2" style={{ fontFamily: 'Courier New', Courier: true, fontWeight: 600 }}>Be Verified</p>
            <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New', Courier: true }}>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X</small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Sign up</h2>
                <p>We are happy to have you here.</p>
              </div>
              <form  onSubmit={(e)=>{
                e.preventDefault();
                async function signup(){
                  let res=await axios.post("https://princestudentapi.onrender.com/Registration//",data)
                  if(res.status===201){
                   
                     navigate('/dashboard')
                  }
                }
                signup()
              }}>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Name" name='name' value={data.name} onChange={change}/>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email addess" name='email' value={data.email} onChange={change}/>
              </div>
              <div className="input-group mb-3">
                <input type="number" className="form-control form-control-lg bg-light fs-6" placeholder="Contact" name='contact' value={data.contact} onChange={change}/>
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" name="password" value={data.password} onChange={change}/>
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                {/* <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                </div> */}
                <div className="forgot">
                  <small><a href="#">Forgot Password?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Sign up</button>
              </div>
              </form>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6"><img src="" style={{ width: '20px' }} className="me-2" /><small>Sign In with Google</small></button>
              </div>
              <div className="row">
                <small>Allready have an account? <Link to="/signin">Sign in</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
