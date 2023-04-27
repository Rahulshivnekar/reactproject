import { Navbar, Nav, Form, Button } from 'react-bootstrap';

function SignInPage() {
  return (
    <>
    <div className='userps'>
    <div style={{ backgroundImage: `url("http://source.unsplash.com/1400x1400/?books")`, backgroundSize: 'cover', height: '100vh' }}>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#">Sign In</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Form style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '2rem', borderRadius: '1rem' }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
    </div>
    </>
  );
}

export default SignInPage;
