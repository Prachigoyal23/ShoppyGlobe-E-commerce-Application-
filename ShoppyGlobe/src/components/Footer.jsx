import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import '../index.css'

function Footer(){
  return (
    <footer>
      <div className='footer-content'>

        <div>
          <h4>About Us</h4>
          <p>At ShoppyGlobe, we're redefining the way the world shops. Whether you're looking for the latest fashion trends, everyday essentials, unique gadgets, or home décor, we bring a curated collection of high-quality products right to your fingertips. Our global marketplace connects you with trusted sellers and emerging brands from around the world — all in one seamless shopping experience.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <Link to="/category/beauty">Beauty</Link>
          <br />
          <Link to="/category/fragrances">Fragrances</Link>
          <br />
          <Link to="/category/furniture">Furniture</Link>
          <br />
          <Link to="/category/groceries">Groceries</Link>
        </div>

        <div>
          <h4>Help</h4>
          <a href="mailto:goyalprachi2324@gmail.com">Contact</a>
          <br />
          <a href="tel:+918359978903">Support</a>
          <br />
          <a href="#">Terms & Conditions</a>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a href="https://www.linkedin.com/in/prachi-goyal-a71873259/"><FaLinkedin /></a>
          <br />
          <a href="https://github.com/Prachigoyal23"><FaGithub /></a>
          <br />
          <a href="https://leetcode.com/u/PrachiGoyal23/"><SiLeetcode /></a>
        </div>
        
      </div>

      <p>
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
};


export default Footer;

