import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p> The industry is simply dummy text of the printing and typesetting industy and it was developed to save people from crying for food you can just order food from your phone now. </p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+2347014013006</li>
                <li>Contact@adelajawaheed36@gmail.com</li>
            </ul>

        </div>
       
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 © Food-del.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
