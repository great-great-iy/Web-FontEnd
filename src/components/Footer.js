import React from 'react';
import '../css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the PTIT to receive our best course deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src='../images/Logo_PTIT_3D.png' alt='logo'/>
            </Link>
          </div>
          <small class='website-rights'>Hoc Vien Cong Nghe Buu Chinh Vien Thong @ 2021</small>
          <div class='social-icons'>
            <a 
              class='social-icon-link facebook'
              href='https://www.facebook.com/HocvienPTIT'
              target='_blank'
              rel="noreferrer"
              aria-label='Facebook'
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCBtg9-qw_QG3T8WovsckaFg'
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
