import React from 'react';
//import Navi from './Navigator'
//import Contact from './Contact'
import {Link} from 'react-router-dom'


class Logo extends React.Component {


  
  render() {
    return (
      <div>
        <header className="Logo-header">
          <img src="https://i.ibb.co/YXYBr09/logock.png" className="Logo-logo" alt="logo" />
          <h2>Front-End Developer_</h2>
          <h2 className="myName">Cinthia Karen Sánchez de Tagle García</h2>
        </header>
        <li type='circle'>
            <Link to="/Contact">Contact</Link>
        </li>  
      </div>
    );
  }
}

export default Logo;
