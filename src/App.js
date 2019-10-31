import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="resume">
      <div className="top-of-page">
        <header className="resume-header">
          <nav className="top-block">
            <a className="resume-link">Resume</a>
            <a className="contact-link">Contact</a>
          </nav>
        </header>
        <img className="profile-img" src="profilePic.jpg" alt="profile image"></img>
        <h2 className="name">Laura Gaber</h2>
      </div>
      <body>
        <h3 className="brief-about">Front-end developer</h3>
        <h3 className="brief-about">Years of professional experience: 4</h3>
        <p>I am an experienced developer with a demonstrated history of working in the technology industry. 
          I am skilled in Javascript, HTML, CSS with a  
          strong business background. </p>
      </body>
    </div>
  );
}

export default App;
