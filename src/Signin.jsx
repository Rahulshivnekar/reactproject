import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';


function Signin() {
  var navigate=useNavigate();
  let [data,updatedata]=useState({email:'',password:''});
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
            <p className="text-white fs-2" style={{ fontFamily: 'Courier New', Courier: true, fontWeight: 600 }}>Wellcome back</p>
            <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New', Courier: true }}>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” —Malcolm X</small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Login</h2>
                <p>We are happy to have you back.</p>
              </div>
              <form  onSubmit={(e)=>{
                e.preventDefault();
                async function signup(){
                  let d=await axios.get("https://princestudentapi.onrender.com/Registration//")
                  d =await d.data
                  let c=0;
                  for(var i of d){
                    if(data.email===i.email && data.password===i.password){
                        c++;
                        break;
                    }

                  }
                  if(c===0){
                    alert('invalid email or password')
                  }

                  else{
                    navigate("/dashboard")
                  }
                }
                signup()
              }}>
              
              <div className="input-group mb-3">
                <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email addess" name='email' value={data.email} onChange={change}/>
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
                <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Login</button>
              </div>
              </form>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6"><img src="" style={{ width: '20px' }} className="me-2" /><small>Sign In with Google</small></button>
              </div>
              <div className="row">
                <small>Dont have an account? <Link to="/">Sign up</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
