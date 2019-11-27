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









const useStyles = makeStyles({
    card: {
      maxWidth: 500,
    },
  });


export default function Projects(){ 

    const classes = useStyles();
    const accent =lightGreen.A100;
    
        return(
            <div className='newPreview'> 
                

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
                                Project to practice handle of arrays and use of .json files, developed with vanilla JS
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
                        <h2>Red Social</h2>
                        <CardActionArea>
                            <Link href='https://cstgarcia1204.github.io/GDL003-social-network/src/'>
                                <CardMedia
                                component="img"
                                alt="movie-challenge"
                                height="220"
                                image="https://i.imgur.com/EHbKcaC.jpg"
                                title="Red-social"
                                />
                            </Link>
                            <CardContent>   
                                <Typography variant="body1" color="textPrimary" component="p">
                                FoodJUNKIES project is a Social Network that was developed, contemplating a Login, Content and the use of Firebase and GoogleMaps API.
                                In this case the topic is food recommendation app.
                                WebApp developed whit Vanilla JavaScript
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
                                height="220"
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
                <Navi/>
            </div>
        );
    
};
