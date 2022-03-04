import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'


import Jump from 'react-reveal/Jump';

export default function Footer() {
    return (
        <div className='footer-container'>
          
          <section class='social-media'>
            <div class='social-media-wrap'>
              <div class='footer-logo'>
              </div>
              <small class='website-rights' style={{color:'blueviolet'}}>Sachith Tharinda 2022</small>
              <Jump>
              <div class='social-icons'>
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
              </div></Jump>
            </div>
          </section>
        </div>
      );
}
