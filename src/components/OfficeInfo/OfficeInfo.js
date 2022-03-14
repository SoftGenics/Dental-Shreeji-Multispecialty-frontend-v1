import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './OfficeInfo.css'

function OfficeInfo() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'#f6feff', padding:'4rem'}}>
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2>OFFICE INFORMATION</h2>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-phone-alt"></i>&nbsp;Phone:&nbsp;<a href='tel: +917800230430'style={{color:'rgb(243, 40, 13)', textDecoration:'none'}} > +91 7800230430</a><br></br>
                        </div>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-clock"></i>&nbsp;&nbsp;TIMINGS:
                        </div>
                        <div className=' mt-3 mb-5 office-info-section'>
                        <p>Morning: 9:30 A.M,- 1:30 P.M&nbsp;</p>
                        <p>Evening: 5:00 P.M. - 9:00 P.PM.&nbsp;</p>
                        <p><b>TUESDAY / SATURDAY & SUNDAY ONLY BY APPOINTMENT</b>.</p>
                        </div>
                        <h5>Follow us!</h5>
                        <div className='px-2 mt-3 mb-3 follow-icon'>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-facebook"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-instagram-square"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-youtube"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-google-plus"></i></Link>
                        </div>
 
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3665058.0368039394!2d80.79407209963688!3d26.22404748411077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d25.594094199999997!2d85.1375636!4m5!1s0x399bfd87003e1073%3A0x811a37320be57cb5!2sshreeji%20multispeciality%20dental%20clinic!3m2!1d26.8790564!2d80.9346279!5e0!3m2!1sen!2sin!4v1647234970699!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OfficeInfo