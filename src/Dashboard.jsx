import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  let [data, updatedata] = useState([]);
  useEffect(() => {
    show();
  });
  async function show() {
    var res = await axios.get("http://tanveerpp.pythonanywhere.com/product/");
    updatedata(res.data)
  }
  var total = 0;
  return (
    <>
      <Container className='d-grid my-10'>
       
        <Row>
          <Col sm={12} md={4}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Courses</h5>
                <p className="card-text">You are currently enrolled in {total} courses.</p>
              </div>
            </div>
          </Col>
          
          <Col sm={12} md={4}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Attendance</h5>
                <p className="card-text">You have attended 80% of your classes this semester.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container><br></br><br></br>
      
      <h2 className='our-courses'>Our courses</h2>
      <div className='tab-dash'>
        <table className='table table-success-borderd text-center table-hover container'>
          <thead>
            <tr>

              <th>Course Name</th>
              <th>Fees</th>
              <th>Duration</th>

            </tr>
          </thead>
          <tbody>
            {data.map((v) => {
                 
              return (<tr key={v.id} id={v.id}>

                <td>{v.name}</td>
                <td>{v.price}</td>

                <td><button className='btn btn-danger' onClick={() => {
                  async function del() {
                    let res = await axios.delete(`http://tanveerpp.pythonanywhere.com/product/${v.id}`);
                    if (res.status === 204) {
                      alert("product deleted succesfully")
                    }
                  }
                  del();
                }}>Delete</button></td>
                <td><button className='btn btn-warning' onClick={() => {
                  updateproduct({ ...v })
                }}>Update</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
