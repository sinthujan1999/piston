import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "/home/sinthujan/Desktop/piston_team/src/Piston/front-view-generic-brandless-moder-car_110488-502.jpg";
import { Divider } from '@material-ui/core';
import img from "/home/sinthujan/Desktop/piston_team/src/Piston/white-wallpaper-11.jpg";
import TextField from '@material-ui/core/TextField';
// import sign from './images/signup.jpg'
import {ValidatorForm} from 'react-form-validator-core';
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // Width: 100,
    
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      height: theme.spacing(20),
    
    },
    // media: {
    //     height: 50,
    //   },
  },
}));
const mystyle = {
    backgroundImage:
      'linear-gradient( 166deg, rgb(255, 255, 255) 19%, rgb(23, 255, 255) 80%, rgb(23, 255, 255) 70%)',
    // color:
    // boxShadow: '20 20px 10px 90 rgba(255,255,255)',
    // 'linear-gradient( 136deg, rgb(23, 48, 232) 0%, rgb(23, 211, 232) 50%, rgb(23, 48, 232) 100%)',
    fontFamily: "Arial"
  };

export default function SimplePaper() {
  const classes = useStyles();
  

  return (
    <div >

<Card elevation={10} className={classes.root}>
      <CardMedia >
      <img src= {img} alt="Logo" height="100%" width="30%" /> 
  </CardMedia>
      {/* <Divider/> */}
         <CardContent>
         
          <Typography gutterBottom variant="h5" component="h2" >
          <p style={mystyle}>Our Terms And Conditions</p>
          </Typography>
          <Divider />
          <Typography variant="h6" color="textSecondary" component="p">
         ethooo pannuram success akkina sarihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh<br></br>
          ffgghhh
          </Typography>
        </CardContent>
      <CardActions>
        <Button variant="contained"size="small" color="primary">
          Agree
        </Button>
        <Button variant="contained"size="small" color="primary">
          Disagree
        </Button>
      </CardActions>
    </Card>
   
    </div>
  );
}

