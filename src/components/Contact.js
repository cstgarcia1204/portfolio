import React from 'react';
import Navi from './Navigator'

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

//import {data} from '../myData.js'








export default function Contact(){ 

    
        return(
            


                <div className= 'contactData'>
                    <h2>Contact me :</h2>
                    <h2> <a href='mailto:ckstgarcia@gmail.com'><EmailIcon fontSize='large'></EmailIcon> ckstgarcia@gmail.com</a></h2>
                    <h2> <a href='https://github.com/cstgarcia1204'><GitHubIcon fontSize='large'></GitHubIcon> cstgarcia1204</a></h2>
                    <h2> <a href='https://www.linkedin.com/in/cinthia-sanchez-de-tagle/'><LinkedInIcon fontSize='large'></LinkedInIcon> Cinthia Sánchez de Tagle</a></h2>
                

                    <Navi/>
                </div>
        );
    
};