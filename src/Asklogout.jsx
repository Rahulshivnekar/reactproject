import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Asklogout() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="btn btn-light btn-lg">
        Logout
      </Button>
      
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id=" contained-modal-title-vcenter">
          Click confirm to logout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="/signin"><button className='btn btn-primary'>confirm</button></Link>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Asklogout;