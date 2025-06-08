import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'


function NotFound(){
  const nav = useNavigate();
  return(
  <div className="not-found-container">
    <p className="message">Oops! The page you're looking for doesn't exist.</p>
    <button className="back-home-btn" onClick={()=> {nav('/')}}>⬅ Back to Home</button>
  </div>
);}

export default NotFound;
