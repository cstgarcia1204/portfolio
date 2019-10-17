import React from 'react';



class Contact extends React.Component {
   
    render(){
        return(
        <div className='preview'>
            <div className='cypher'> 
                <a href="https://cstgarcia1204.github.io/GDL003-cipher/src/" tittle="cipher">
                <img src="https://i.ibb.co/khZKzZy/inicio-Internet.png" alt="cipher"/> </a>
            </div>
            <div className='dataLovers'> 
                <a href="https://surferzer.github.io/GDL003-data-lovers/src/" tittle="dataLovers">
                <img src="https://i.ibb.co/ZMGgMkW/Screenshot-2019-10-17-Data-Lovers.jpg" alt="dataLovers"/> </a>
            </div>
            <div className='movieChallenge'> 
                <a href="https://cstgarcia1204.github.io/GDL003-movie-challenge/src/" tittle="movieChallenge">
                <img src="https://i.ibb.co/0CXGhBk/Screenshot-2019-10-17-Movie-Challenge.png" alt="movieChallenge"/> </a>
            </div>
            <div className='labNotes'> 
                <a href="https://cstgarcia1204.github.io/GDL003-lab-notes/?mode=select#/login" tittle="labNotes">
                <img src="https://i.ibb.co/FkpJb6X/Screenshot-2019-10-17-ck-notes.png" alt="labNotes"/> </a>
            </div>
            <div className='ciboulette'> 
                <a href="https://lauramayavayahayaraya.github.io/GDL003-Burger-Queen-Front-End/" tittle="ciboulette">
                <img src="https://i.ibb.co/J3y5J5v/Screenshot-2019-10-17-Ciboulette.png" alt="ciboulette"/> </a>
            </div>
            <div className= 'contactData'>
                <h2>Email: <a href='ckstgarcia@gmail.com'>ckstgarcia@gmail.com</a></h2>
                <h2>Github: <a href='https://github.com/cstgarcia1204'>https://github.com/cstgarcia1204</a></h2>
            </div>
           
        </div>
        );
    }

};

export default Contact;