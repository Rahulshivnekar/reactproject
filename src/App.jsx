import React from 'react'
import Signup from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Route, Routes } from 'react-router-dom';
import Pagenotfound from './Pagenotfound';
import Signin from './Signin';
import Dashboard2 from './Dashboard2';
import Teacherdash from './Teacher_db/Teacherdash';
import Studentdash from './Student_db/Studentdash';
import Ttestapi from './Teacher_db/Ttestapi';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Pagenotfound/>}></Route>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard2/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/teacher' element={<Teacherdash/>}></Route>
      <Route path='/student' element={<Studentdash/>}></Route>

    </Routes>
     
    </>
  )
}

export default App