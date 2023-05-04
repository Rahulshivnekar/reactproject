import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addteacher() {
 
  const [show, setShow] = useState(false);
  const [data,updatedata]=useState({
  teachername:'',
  employeesid:0, 
  teacheremail:'',
  teacherpassword:'',
  teachermobile:'',
  joindate:'',
  education:'',
  workexp:'',
  photo:'',
  gender:"M",
  is_active:'true',
  teachercourse: "https://princestudentapi.onrender.com/Course//9/"})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 function change(e){
  updatedata({...data,[e.target.name]:e.target.value})
  console.log(data)
 }
 async function Add(){
         var res=await axios.post("https://princestudentapi.onrender.com/Teacher//",data)
         if(res.status===200){
          alert('added succesfully')
         }
 }
 function handleBothClick(){
  handleClose()
  Add()
 }
 const [values,setValues]=useState([]);
 const [option,setOptions]=useState();
 useEffect(()=>{
  fetch("https://princestudentapi.onrender.com/Course//")
  .then((data)=>data.json())
  .then((val)=>setValues(val));
 },[]);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add teacher
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='teachername'
                value={data.teachername}
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employeesid</Form.Label>
              <Form.Control
                type="text"
                placeholder="478"
                name='employeesid'
                value={data.employeesid}
                onChange={change}
                autoFocus
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                value={data.teacheremail}
                name="teacheremail"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={data.teacherpassword}
                name="teacherpassword"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="text"
                value={data.teachermobile}
                name="teachermobile"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>join date</Form.Label>
              <Form.Control
                type="date"
                value={data.joindate}
                name='joindate'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                
                value={data.education}
                name='education'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>work experience</Form.Label>
              <Form.Control
                type="text"
                value={data.workexp}
                name='workexp'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>photo</Form.Label>
              <Form.Control
                type="file"
                placeholder="name@example.com"
                value={data.photo}
                name="photo"
                
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>gender</Form.Label>
              <Form.Control
                type="text"
                value={data.gender}
                name="gender"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>is active</Form.Label>
              <Form.Control
                type="radio"
               value={data.is_active}
               name="is_active"
               onChange={change}
                autoFocus
              />
            </Form.Group>
            <label>teacher course</label>
            <select onChange={change} name="teachercourse" value={data.teachercourse}>
              {
                values.map((optn,i)=> <option key={i} value={optn.url}>{optn.name}</option>)
              }
            </select>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleBothClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Addteacher;