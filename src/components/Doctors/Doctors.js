import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './Doctors.css'

function Doctors() {
  return (
    <div>
        <Container className='doctor-container' id="doctor">
        <h2 className="text-center mt-3 mb-5">OUR <span style={{color:'#f66840'}}> &nbsp;DOCTORS</span></h2>
        <Container>
            
                <Card >
                <Row className='doctors-card-wraper '>
                    <Col md={5}>
                    <Card.Img variant="top" src="images/doc.jpg" />
                    </Col>
                    <Col md={7}>
                    <Card.Body>
                        <Card.Title>Dr. Gaurav Naresh</Card.Title>
                        <Card.Text><b>B.D.S, M.I.D.A</b></Card.Text>
                        <p>Mob: +91 7800230430</p>
                        <p>E-mail: gauravmehrotra906@gmail.com</p>
                        <p><b>Clinic: B-104/6, Nirala Nagar, Lucknow</b></p>
                    </Card.Body>
                    </Col>
                    </Row>
                    </Card>
                 
            </Container>
        </Container>
    </div>
  )
}

export default Doctors