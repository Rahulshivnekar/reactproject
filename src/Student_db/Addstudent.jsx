import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addstudent() {
 
  const [show, setShow] = useState(false);
  const [data,updatedata]=useState({
  sname:'',
   semail:'',
  smobile:'',
  saddress:'',
  scollege:'',
  sdegree:'',
  total_amount:'',
  paid_amount:'',
  due_amount:'',
  scourse: ""})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 function change(e){
  updatedata({...data,[e.target.name]:e.target.value})
  console.log(data)
 }
 async function Add(){
         var res=await axios.post("https://princestudentapi.onrender.com/AddStudent//",data)
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
  .then((data) => data.json())
  .then((val) => setValues(val));
 },[]);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Add student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='sname'
                value={data.sname}
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@gmail.com"
                name='semail'
                value={data.semail}
                onChange={change}
                autoFocus
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="p.no"
                value={data.smobile}
                name="smobile"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={data.saddress}
                name="saddress"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                value={data.scollege}
                name="scollege"
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>degree</Form.Label>
              <Form.Control
                type="text"
                value={data.sdegree}
                name='sdegree'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total amount</Form.Label>
              <Form.Control
                type="number"
                
                value={data.total_amount}
                name='total_amount'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>paid amount</Form.Label>
              <Form.Control
                type="number"
                value={data.paid_amount}
                name='paid_amount'
                onChange={change}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Due amount</Form.Label>
              <Form.Control
                type="number"
                
                value={data.due_amount}
                name="due_amount"
                
                onChange={change}
                autoFocus
              />
            </Form.Group>
            
            
            <label htmlFor='Select_course'>Student course</label>
            <select onChange={change} name="scourse" >
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
export default Addstudent;