import React from 'react';
//import Navi from './Navigator'
//import Contact from './Contact'
import {Link} from 'react-router-dom'


class Logo extends React.Component {


  
  render() {
    return (
      <div>
        

        
        <header className="Logo-header">
          <img src="https://i.ibb.co/3fXmXRH/logo-ck.png" className="Logo-logo" alt="logo" />
          <h2 className="myName">Hello! my name is Cinthia Sánchez de Tagle</h2>
          <h2>I'm a Junior Front-End Developer_</h2>
        </header>
        <li className='logoContact'>
            <Link to="/Contact">Contact</Link>
        </li>
       
      </div>
    );
  }
}

export default Logo;
