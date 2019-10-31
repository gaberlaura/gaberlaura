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
                  <span className="regular-text" >The University of Iowa, Iowa City, IA</span>                                                            
                  <h3 className="brief-about">Electrical & Computer Engineering  </h3>
                  <p className="regular-text">I am an experienced developer with a demonstrated history of working in the technology industry. 
                    I am skilled in Javascript, HTML, CSS with a  
                    strong business background. 
                  </p>
                  <h3 className="brief-about">Technical Skills:</h3>
                  Languages: HTML, CSS, JAVASCRIPT, EXTJS, C, C++, SQL, PL/SQL
                  Databases: Oracle, Cassandra, MySQL
                  Operating Systems: Mac, Linux, Windows
                  Development Tools: Git, Visual Studio Code, Putty, PL/SQL developer
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
