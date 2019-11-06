import React from 'react';
import Navi from './Navigator'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import lightGreen from '@material-ui/core/colors/lightGreen'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';








const useStyles = makeStyles({
    card: {
      maxWidth: 500,
    },
  });


export default function Contact(){ 

    const classes = useStyles();
    const accent =lightGreen.A100;


    
        return(
            <div className='newPreview'> 
                <section>
                    <Card className={classes.card} style={{ backgroundColor: accent }}>
                        <h2>Cipher</h2>
                        <CardActionArea>
                            <Link href='https://cstgarcia1204.github.io/GDL003-cipher/src/'>
                                <CardMedia
                                component="img"
                                alt="cipher"
                                height="230"
                                image="https://i.ibb.co/khZKzZy/inicio-Internet.png"
                                title="Cipher"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p">
                                The brand new first project where Caesar cipher is used as a model, the web app recognizes characters, 
                                uppercase, lowercase and numbers. Developed with vanilla JS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </section>

                <section>
                    <Card className={classes.card} style={{ backgroundColor: accent }}>
                        <h2>Data Lovers</h2>
                        <CardActionArea>
                            <Link href='https://surferzer.github.io/GDL003-data-lovers/src/'>
                                <CardMedia
                                component="img"
                                alt="data-lovers"
                                height="250"
                                image="https://i.ibb.co/ZMGgMkW/Screenshot-2019-10-17-Data-Lovers.jpg"
                                title="Data-lovers"
                                />
                            </Link>
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p">
                                Project to practice handle of arrays and use of .json files, using vanilla JS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </section>

                <section>
                    <Card className={classes.card} style={{ backgroundColor: accent }}>
                        <h2>Movie Challenge</h2>
                        <CardActionArea>
                            <Link href='https://cstgarcia1204.github.io/GDL003-movie-challenge/src/'>
                                <CardMedia
                                component="img"
                                alt="movie-challenge"
                                height="230"
                                image="https://i.ibb.co/0CXGhBk/Screenshot-2019-10-17-Movie-Challenge.png"
                                title="Movie-challenge"
                                />
                            </Link>
                            <CardContent>   
                                <Typography variant="body1" color="textPrimary" component="p">
                                Project created during a challenge, using OMDb API (The Open Movie Database), first approach with promises in JS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </section>

                <section>
                    <Card className={classes.card} style={{ backgroundColor: accent }}>
                        <h2>Lab Notes</h2>
                        <CardActionArea>
                            <Link href='https://cstgarcia1204.github.io/GDL003-lab-notes/?mode=select#/login'>
                                <CardMedia
                                component="img"
                                alt="lab-notes"
                                height="230"
                                image="https://i.ibb.co/FkpJb6X/Screenshot-2019-10-17-ck-notes.png"
                                title="Lab-notes"
                                />
                            </Link>
                            <CardContent>   
                                <Typography variant="body1" color="textPrimary" component="p">
                                Project for a progressive web app CRUD (Create, Read, Update and Delete) using React and Firebase
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </section>

                <section>
                    <Card className={classes.card} style={{ backgroundColor: accent }}>
                        <h2>Ciboulette</h2>
                        <CardActionArea>
                            <Link href='https://LauraMayaR.github.io/GDL003-Burger-Queen-Front-End/'>
                                <CardMedia
                                component="img"
                                alt="ciboulette"
                                height="230"
                                image="https://i.ibb.co/J3y5J5v/Screenshot-2019-10-17-Ciboulette.png"
                                title="Ciboulette"
                                />
                            </Link>
                            <CardContent>   
                                <Typography variant="body1" color="textPrimary" component="p">
                                First approach to the Back-End.
                                Project for a restaurant orders service app, I was in the back-end team creating a RESTful API with the cloud service of mongodb-Atlas, moongoseJS, ExpressJs, postMan.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </section>


            <div className= 'contactData'>
           <h2> <EmailIcon fontSize='large'></EmailIcon> Email: <a href='ckstgarcia@gmail.com'>ckstgarcia@gmail.com</a></h2>
           <h2> <GitHubIcon fontSize='large'></GitHubIcon> Github: <a href='https://github.com/cstgarcia1204'>https://github.com/cstgarcia1204</a></h2>
            </div>

            <Navi/>
            
           
        
        </div>
        );
    
};