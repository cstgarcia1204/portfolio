import React from 'react';
import {Link} from 'react-router-dom';


const Navi= ()=>{
    return(
        <React.Fragment>
            <nav className='navBar'>
            <ul>
                
                <li >
                    <Link to="/About">About Me</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Logo">Home</Link>
                </li>
                
            </ul>
            </nav>
        </React.Fragment>
    );

};

export default Navi;