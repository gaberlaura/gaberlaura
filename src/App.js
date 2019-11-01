import React from 'react';
import {Link , Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="resume">
      <div className="top-of-page">
        <header className="resume-header">
          <nav className="top-block">
            <a className="resume-link" href='https://github.com/gaberlaura' target="_blank">Github</a>
            <a className="resume-link" href='/LauraGaber.pdf' download>Resume</a>
            
              <Link className="contact-link" to="/Contact">Contact</Link>
             
           
          </nav>
        </header>
        <img className="profile-img" src="profilePic.jpg" alt="profile image"></img>
        <h2 className="name">Laura Gaber</h2>
      </div>
      <body>
      <Switch>
        <Route path="/" exact component={()=>{

          return (
                <div>
                  <h3 className="brief-about">Front-end developer</h3>
                  <h3 className="brief-about">Education:   </h3>   
                  <span className="regular-text">Electrical & Computer Engineering  </span><br/> 
                  <span className="regular-text" >The University of Iowa, Iowa City, IA</span>                                                           
                  <h3 className="brief-about">About:   </h3>
                  <p className="regular-text">I am an experienced developer with a demonstrated history of working in the technology industry. 
                    I am skilled in Javascript, HTML, CSS with a  
                    strong business background. 
                  </p>
                  <h3 className="brief-about">Technical Skills:</h3>
                  <div className="regular-text">
                    <ul>
                      <li>Languages: HTML, CSS, JAVASCRIPT, EXTJS, C, C++, SQL, PL/SQL</li>
                      <li>Databases: Oracle, Cassandra, MySQL</li>
                      <li>Operating Systems: Mac, Linux, Windows</li>
                      <li>Development Tools: Git, Visual Studio Code, Putty, PL/SQL developer</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Certifications: </h3>
                  <div className="regular-text">
                    <ul>
                      <li>Oracle Database 12C: Advanced PL/SQL</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Language Proficiencies: </h3>
                  <div className="regular-text">
                    <ul>
                      <li>Fluent in English and Arabic</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Professional Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Founder, </span>
                    <span> Five Stars Tutoring</span><br/>
                    <span className="job-title">Software engineer, </span>
                    <span> Novetta</span><br/>
                    <span className="job-title">Software engineer, </span>
                    <span> General Dynamics IT</span><br/>
                  </div>
                  <h3 className="brief-about">Internships/Student Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Student developer, </span>
                    <span> University of Iowa Biology Department</span><br/>
                    <span className="job-title">Database intern, </span>
                    <span> General Dynamics</span><br/>
                    <span className="job-title">Intern, </span>
                    <span> Emerson Process Management</span><br/>
                    <span className="job-title">Database developer, </span>
                    <span> University of Iowa Hospital</span><br/>
                    <span className="job-title">Tech lab assistant, </span>
                    <span> University of Iowa Medical Research Center</span><br/>
                  </div>
                  <h3 className="brief-about">Tutoring Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Tutor, </span>
                    <span> Five Stars Tutoring</span><br/>
                    <span className="job-title">Tutor, </span>
                    <span> Bullseye Learning</span><br/>
                    <span className="job-title">Tutor, </span>
                    <span> Youth Lift</span><br/>
                    <span className="job-title">Tutor, </span>
                    <span> University of Iowa</span><br/>
                    <span className="job-title">Tutor, </span>
                    <span> Eye Level Learning</span><br/>
                  </div>
                  <h3 className="brief-about">Leadership Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">President, </span>
                    <span> Engineering Student Counsil</span><br/>
                    <span className="job-title">Mentor/Ambassador, </span>
                    <span> Women in Science and Engineering</span><br/>
                  </div>
              </div>
          );
        }}/>
        <Route path="/Contact" exact component={()=><Contact/>}/>
      </Switch>
       
      </body>
    </div>
    </Router>
  );
}

export default App;
