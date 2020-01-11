import React from 'react';
import {Link , Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Contact from './Contact.js';
import Availibility from './Availibility.js';
import './App.css';

function App() {
  return (
    <Router>
    <div className="resume">
      <div className="top-of-page">
        <header className="nav-header">
          <nav className="top-block">
            <Link className="nav-link" to="/Availibility"> Availibility </Link>
            <a className="nav-link" href='https://github.com/gaberlaura' target="_blank">Github</a>
            <a className="nav-link" href='/LauraGaber.pdf' download>Resume</a>
            <Link className="contact-link" to="/Contact">Contact</Link>
          </nav>
        </header>
        <Link className="home-link" to="/"><img className="profile-img" src="profilePic.jpg" alt="profile image"></img></Link>
        
        <h2 className="name">Laura Gaber</h2>
      </div>
      <body>
      <Switch>
        <Route path="/" exact component={()=>{
          return (
                <div>
                  <h3 className="brief-about">Full Stack Developer</h3>
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
                      <li>Languages: HTML, CSS, JAVASCRIPT, SQL</li>
                      <li>Frameworks/Libraries: React, EXTJS</li>
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
                    <ul>
                      <li>Build team of qualified tutors</li>
                      <li>Market company to potential customers</li>
                      <li>Support low-income families through county-funded programs</li>
                    </ul>
                    <span className="job-title">Software engineer, </span>
                    <span> Novetta</span><br/>
                    <ul>
                      <li>Debug as well as create new features using EXTJS, Go and Cassandra</li>
                      <li>Work in a LINUX environment, specifically Redhat 6.X</li>
                      <li>Provide mentorship for new hires</li>
                      <li>Assist in interviewing new engineering candidates</li>
                    </ul>
                    <span className="job-title">Software engineer, </span>
                    <span> General Dynamics IT</span><br/>
                    <ul>
                      <li>Query Oracle databases using the PL/SQL language</li>
                      <li>Communicate with offshore teams</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Internships/Student Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Student developer, </span>
                    <span> University of Iowa Biology Department</span><br/>
                    <ul>
                      <li>Migrate university website to use Drupal</li>
                      <li>Maintain university website using PHP, HTML, and CSS</li>
                    </ul>
                    <span className="job-title">Database intern, </span>
                    <span> General Dynamics</span><br/>
                    <ul>
                      <li>Query Oracle databases using the PL/SQL language</li>
                    </ul>
                    <span className="job-title">Intern, </span>
                    <span> Emerson Process Management</span><br/>
                    <ul>
                      <li>Support parts pricing methodology development using Microsoft Access, SQL, and VBA</li>
                    </ul>
                    <span className="job-title">Database developer, </span>
                    <span> University of Iowa Hospital</span><br/>
                    <ul>
                      <li>Implement queries for data search using the SQL language</li>
                      <li>Create and manipulate tables based on requirements</li>
                    </ul>
                    <span className="job-title">Tech lab assistant, </span>
                    <span> University of Iowa Medical Research Center</span><br/>
                    <ul>
                      <li>Maintain university website using Dreamweaver</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Tutoring Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Tutor, </span>
                    <span> Bullseye Learning</span><br/>
                    <ul>
                      <li>Tutor 1st, 2nd and 4th grade students in Math and English</li>
                      <li>Recognize student skill sets and areas in need of improvement</li>
                      <li>Assist students with homework assignments</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> Youth Lift</span><br/>
                    <ul>
                      <li>Tutor homeless teenage student</li>
                      <li>Research and assist with GED matters</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> University of Iowa</span><br/>
                    <ul>
                      <li>Tutor students to better understand core engineering subjects</li>
                      <li>Collaborate with students to assist them in solving difficult assignments</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> Eye Level Learning</span><br/>
                    <ul>
                      <li>Tutor K-12 students Math and English</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Leadership Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">President, </span>
                    <span> Engineering Student Counsil</span><br/>
                    <ul>
                      <li>Manage/supervise engineering student organizations</li>
                      <li>Organize various activities for students throughout the semester</li>
                      <li>Orchestrate weekly meetings with director of engineering programs to relay ideas of
                      various student groups as well as to approve annual funding of $3,000+</li>
                      <li>Generate/run monthly fundraising activities</li>
                    </ul>
                    <span className="job-title">Mentor/Ambassador, </span>
                    <span> Women in Science and Engineering</span><br/>
                    <ul>
                      <li>Mentor incoming freshmen students on college courses and experience</li>
                      <li>Serve as Educational Ambassador for incoming university students and encourage campus involvement</li>
                    </ul>
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
