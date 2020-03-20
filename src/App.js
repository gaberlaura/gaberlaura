import React from 'react';
import {Link , Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Contact from './Contact.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="top-of-page">
        <header className="nav-header">
          <nav className="top-block">
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
                  <h3 className="brief-about">Full Stack Developer & Educator</h3>
                  <h3 className="brief-about">Education:   </h3>   
                  <span className="regular-text">Electrical & Computer Engineering  </span><br/> 
                  <span className="regular-text" >The University of Iowa, Iowa City, IA</span><br/><br/>      
                  <span className="regular-text">Educator Preparation Institute</span><br/> 
                  <span className="regular-text" >Hillsborough Community College, Tampa, FL</span>                                                        
                  <h3 className="brief-about">About:   </h3>
                  <p className="regular-text">I am an experienced software developer and educator with a demonstrated history of working in the technology industry.</p>
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
                      <li>Reading Endorsement</li>
                      <li>Statement of Eligibility in Math 6-12</li>
                      <li>Statement of Eligibility in Computer Science K-12</li>
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
                    <span> May 2019 - Present</span><br/>
                    <ul>
                      <li>Build team of qualified tutors</li>
                      <li>Market company to potential customers</li>
                      <li>Support low-income families through county-funded programs</li>
                    </ul>
                    <span className="job-title">CEI Coordinator, </span>
                    <span> Clearwater Central Catholic High School</span><br/>
                    <span> August 2019 - June 2020</span><br/>
                    <ul>
                      <li>Manage classes of 20-52 high school students</li>
                      <li>Serve as a Teacher's Assistant for the Computer Science class</li>
                      <li>Aid in teaching the Java language to high school students</li>
                      <li>Communicate with FLVS instructors on a weekly basis</li>
                      <li>Ensure a studious environment for all students</li>
                      <li>Regularly check in with students to ensure each student is on pace</li>
                      <li>Help students with registration, login, and any technical issues</li>
                    </ul>
                    <span className="job-title">Software Engineer, </span>
                    <span> Novetta</span><br/>
                    <span> April 2017 - November 2018</span><br/>
                    <ul>
                      <li>Debug as well as create new features using EXTJS, Go and Cassandra</li>
                      <li>Work in a LINUX environment, specifically Redhat 6.X</li>
                      <li>Provide mentorship for new hires</li>
                      <li>Assist in interviewing new engineering candidates</li>
                    </ul>
                    <span className="job-title">Software Engineer, </span>
                    <span> General Dynamics IT</span><br/>
                    <span> July 2015 - December 2016</span><br/>
                    <ul>
                      <li>Query Oracle databases using the PL/SQL language</li>
                      <li>Communicate with offshore teams</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Internships/Student Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Student Developer, </span>
                    <span> University of Iowa Biology Department</span><br/>
                    <span> September 2014 - May 2015</span><br/>
                    <ul>
                      <li>Migrate university website to use Drupal</li>
                      <li>Maintain university website using PHP, HTML, and CSS</li>
                    </ul>
                    <span className="job-title">Database Intern, </span>
                    <span> General Dynamics</span><br/>
                    <span> May 2014 - August 2014</span><br/>
                    <ul>
                      <li>Query Oracle databases using the PL/SQL language</li>
                    </ul>
                    <span className="job-title">Intern, </span>
                    <span> Emerson Process Management</span><br/>
                    <span> May 2013 - December 2013</span><br/>
                    <ul>
                      <li>Support parts pricing methodology development using Microsoft Access, SQL, and VBA</li>
                    </ul>
                    <span className="job-title">Database Developer, </span>
                    <span> University of Iowa Hospital</span><br/>
                    <span> August 2013 - May 2013</span><br/>
                    <ul>
                      <li>Implement queries for data search using the SQL language</li>
                      <li>Create and manipulate tables based on requirements</li>
                    </ul>
                    <span className="job-title">Tech Lab Assistant, </span>
                    <span> University of Iowa Medical Research Center</span><br/>
                    <span> August 2011 - July 2012</span><br/>
                    <ul>
                      <li>Maintain university website using Dreamweaver</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Tutoring Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">Tutor, </span>
                    <span> Bullseye Learning</span><br/>
                    <span> February 2019 - August 2019</span><br/>
                    <ul>
                      <li>Tutor 1st, 2nd and 4th grade students in Math and English</li>
                      <li>Recognize student skill sets and areas in need of improvement</li>
                      <li>Assist students with homework assignments</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> Youth Lift</span><br/>
                    <span> February 2018 - May 2018</span><br/>
                    <ul>
                      <li>Tutor homeless teenage student</li>
                      <li>Research and assist with GED matters</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> University of Iowa</span><br/>
                    <span> July 2012 - May 2014</span><br/>
                    <ul>
                      <li>Tutor students to better understand core engineering subjects</li>
                      <li>Collaborate with students to assist them in solving difficult assignments</li>
                    </ul>
                    <span className="job-title">Tutor, </span>
                    <span> Eye Level Learning</span><br/>
                    <span> June 2011 - August 2011</span><br/>
                    <ul>
                      <li>Tutor K-12 students Math and English</li>
                    </ul>
                  </div>
                  <h3 className="brief-about">Leadership Experience: </h3>
                  <div className="regular-text">
                    <span className="job-title">President, </span>
                    <span> Engineering Student Counsil</span><br/>
                    <span> January 2011 - August 2013</span><br/>
                    <ul>
                      <li>Manage/supervise engineering student organizations</li>
                      <li>Organize various activities for students throughout the semester</li>
                      <li>Orchestrate weekly meetings with director of engineering programs to relay ideas of
                      various student groups as well as to approve annual funding of $3,000+</li>
                      <li>Generate/run monthly fundraising activities</li>
                    </ul>
                    <span className="job-title">Mentor/Ambassador, </span>
                    <span> Women in Science and Engineering</span><br/>
                    <span> August 2011 - August 2012</span><br/>
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
    </Router>
  );
}

export default App;
