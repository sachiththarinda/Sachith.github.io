import React from 'react'
import '../App.css'
import './Home.css'
import Project from './projects/project'
import Footer from './Footer'

import Typical from 'react-typical'
import Reveal from 'react-reveal/Reveal';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import image1 from '../images/sa1.png' 
import image2 from '../images/shewolf1-01.jpg' 
import image3 from '../images/ROJA-01.jpg' 
import image4 from '../images/tattoo-01.jpg' 

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';

export default function home() {
  return (
    <>
  <main className="site-main">

  <Navbar bg="light" expand="lg" style={{color:'black'}}>
  <Container>
    <Navbar.Brand href="#home">Sachith Tharinda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About me</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#works">Works</Nav.Link>
        <Nav.Link href="#contact">Contact me</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    <section className="site-banner" >
            <div className="container-fluid">
            <div className="transbox">
                        <h3 className="title-text">Hi There, I'm </h3>
                        <h1 className="title-text text-uppercase">Sachith Tharinda</h1>
                        <h4 className="title-text ">Designer and Developer</h4>
                        <div className="site-buttons">
                           
                                <button type="button" className="btn button primary-button mr-4 text-uppercase">hire
                                    me</button>
                                <button type="button" className="btn button secondary-button text-uppercase">Get cv</button>
                            
                        </div>
                    </div>
                   </div> 
        </section>



    <section class="about-area" id='about'>
    <div className='container-fluid'>
    <div className="row">
    <div className="col-lg-12 text-center about-title">
    <RubberBand> <h1 className="text-uppercase title-text">who i am</h1></RubberBand>
                
            </div>
            
        <div className="col-lg-6 col-md-12">
            <div className="about-image text-center">
                <img src={image1} alt="" />
            </div>
        </div> 
        <div className="col-lg-6 col-md-12 about-title">
        
        <Fade left cascade>
            <p className="para text-center">
               Hello World !!! Im Sachith Tharinda, <br />a web developer and grapic designer..
               I love to combining the worlds of logic and creative design to make eye-catching, accessible
               and user-friendly websites and designs.

            </p>
            <p className="para text-center">
               Im excited to make the leap and continue refining my skills with the right comapny.
               To have a career where I can challenge myself, my capabilities, and my skills that will empower me to achieve the objectives and goals of the organization.
            
              
            
             
              
              <Jump>
              <div className='about_social'>
              <a href="https://www.facebook.com/profile.php?id=100069298636765" class='social-icon-link facebook'>
                  <i class='fab fa-facebook-f' />
                </a>
                <a href="https://www.instagram.com/sachith.tharinda/" class='social-icon-link instagram'>
               
                  <i class='fab fa-instagram' />
                </a>
                <a href="https://www.behance.net/sachiththarinda1" class='social-icon-link behance'>
                <i class="fa fa-behance" aria-hidden="true"></i>
                </a>
               
                <a href="https://www.linkedin.com/in/sachith-tharinda-bb4325208/" class='social-icon-link linkedin'>
                  <i class='fab fa-linkedin' />
                  </a>
                  <a href="https://github.com/sachiththarinda" class='social-icon-link linkedin'>
                  <i class="fa fa-github" aria-hidden="true"></i>
                  </a>
                  </div>
                 

            </Jump>
            </p>
            
            <div className='downloadcv__button text-center'>
            <a href="my-cv.pdf" class="btn button secondary-button text-uppercase" download='sachith my-cv.pdf' >Download cv</a>
            </div>
            </Fade>
           
                    </div>
            </div> 
    

</div>
</section>


<section className="skills-area" id='skills'>
    <div className="container-fluid">
        <div className="row">
        <div className="col-lg-12 text-center skills-title">
    <RubberBand> <h1 className="text-uppercase title-text">Skills</h1></RubberBand>
       <p className="para">
                Design and Development Skills 
            </p>
            </div>
       
        <Fade left cascade>
        <div className="container skills-list">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="skills">
                        <div className="card-body text-center">
                        <h5 className="card-title text-uppercase font-roboto">Frontend dev</h5>
                            <div>
      
       

        <div className="skills_container container grid">
          <div className="skills__content">
            <div className="skills__header">
             
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">HTML</h3>
               <span className="skills__number">90%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__html"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">CSS</h3>
               <span className="skills__number">90%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__css"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Javascript</h3>
               <span className="skills__number">80%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__javascript"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">React</h3>
               <span className="skills__number">75%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__react"></span>
             </div>
           </div>
          </div>
        </div>
      
    </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="skills">
                        
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase font-roboto">Backend Dev</h5>
                            <div className="skills_container container grid">
          <div className="skills__content">
            <div className="skills__header">
             
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">PHP</h3>
               <span className="skills__number">70%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__php"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Python</h3>
               <span className="skills__number">70%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__python"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Node</h3>
               <span className="skills__number">75%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__node"></span>
             </div>
           </div>
          </div>
        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="skills">
                        
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase font-roboto">Graphic design</h5>
                            <div className="skills_container container grid">
          <div className="skills__content">
            <div className="skills__header">
             
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">illustarator</h3>
               <span className="skills__number">90%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__ai"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Photoshop</h3>
               <span className="skills__number">75%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__ps"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Canva</h3>
               <span className="skills__number">80%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__canva"></span>
             </div>
           </div>
          </div>
        </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="skills">
                       
                        <div className="card-body text-center">
                            <h5 className="card-title text-uppercase font-roboto">UI/UX Design</h5>
                            <div className="skills_container container grid">
          <div className="skills__content">
            <div className="skills__header">
             
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Frigma</h3>
               <span className="skills__number">90%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__frigma"></span>
             </div>
           </div>
           <div className="skills_data">
             <div className="skills_titles">
               <h3 className="skills__name">Adobe XD</h3>
               <span className="skills__number">75%</span>
             </div>
             <div className="skills__bar">
               <span className="skills__percentage skills__xd"></span>
             </div>
           </div>
          
          </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></Fade>
    </div></div>
        </section>

       

  <Project />

  <section class="contact-area" id='contact'>
    <div className='container-fluid'>
    <div className="row">
    <div className="col-lg-12 text-center contact-title">
    <RubberBand> <h1 className="text-uppercase title-text">Contact Me</h1></RubberBand>
                
            </div>
            
        <div className="col-lg-6 col-md-12 ">
            
            <div className='contact_grid '> <Zoom >
               <div className="contact__information">
               <i class="uil uil-phone contact__icon"></i>
               
               <div>
                   <h3 className="contact__title">Call Me</h3>
                   <span className="contact__subtitle">+94 701404652</span>
               </div>
               </div>

               <div className="contact__information">
               <i class="uil uil-envelope contact__icon"></i>

               <div>
                   <h3 className="contact__title">Email</h3>
                   <span className="contact__subtitle">sachith.tharinda@gmail.com</span>
               </div>
               </div>

               <div className="contact__information">
               <i class="uil uil-map-marker contact__icon"></i>
               <div>
                   <h3 className="contact__title">Location</h3>
                   <span className="contact__subtitle">No.501 Gamagewaththa Gothatuwa</span>
               </div>
               </div>
               </Zoom>
          
            </div>
        </div> 
        
        <div className="col-lg-6 col-md-12 about-title">
        
        <Fade left cascade>
        <form action="" className="contact__form grid text-center">
               <div className="contact__inputs grid ">
                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Name :</label>
                       <input type="text" className="contact__input" />
                   </div>

                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Email :</label>
                       <input type="email" className="contact__input" />
                   </div>

                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Project :</label>
                       <input type="text" className="contact__input" />
                   </div>

                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Message :</label>
                       <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                   </div>
               </div>
               <div className='contact__button text-center'>
                   <a href="#" className="btn button secondary-button text-uppercase text-center">
                       Send Message <i class="uil uil-message button__icon"></i>
                   </a>
               </div>
           </form>
            
            </Fade>
           
                    </div>
            </div> 
    

</div>
</section>
   <Footer />
</main>
</>
  )
}
