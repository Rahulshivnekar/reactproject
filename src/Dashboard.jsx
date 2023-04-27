import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Courses</h5>
              <p className="card-text">You are currently enrolled in 4 courses.</p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Grades</h5>
              <p className="card-text">Your average GPA is 3.8.</p>
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
    </Container>
  );
}

export default Dashboard;
