import React from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Pagenotfound from './Pagenotfound';
import Signin from './Signin';
import Teacher from './Teacher';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Pagenotfound/>}></Route>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/teacher' element={<Teacher/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
     
    </>
  )
}

export default App