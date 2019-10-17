import React from 'react';
import {Link} from 'react-router-dom';


const Navi= ()=>{
    return(
        <React.Fragment>
            <ul>
                <li type='circle'>
                    <Link to="/Home">Home</Link>
                </li>
                <li type='circle'>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </React.Fragment>
    );

};

export default Navi;