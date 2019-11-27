import React from 'react';
import Navi from './Navigator'
//import Contact from './Contact'
//import {Link} from 'react-router-dom'


class About extends React.Component {


  
  render() {
    return (
      <div>
        <header className="About-header">
          <h2>About Me_</h2>
            <p>
              I am passionate about technologies and business administration.
            </p>
            <p>
              I have studied Turism at University of Guadalajara and now I have transferred my passion  to programming languages.
            </p>
            <p>
            Right now my main professional goal is to find a job that will give me an opportunity to deepen and improve my programming skills.
            </p>
            <p>
              Mainly I want to focus in keep on learning to become a full-stack developer.
            </p>
            <p>
            I work with technologies such as HTML5, CSS3, JavaScript. I'm also familiar with React, and Firebase.
            </p>
         
          <p></p>
        </header>



        <Navi/>
      </div>
    );
  }
}


export default About;
