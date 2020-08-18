import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classes from '@material-ui/core';
import CardBody from '@material-ui/core/CardContent';
import CardAvatar from '@material-ui/core/Avatar';
import img from "/home/sinthujan/Desktop/piston_team/src/Piston/white-wallpaper-11.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Photoupload() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
           <Card profile>
<CardAvatar profile>
  <a href="#pablo" onClick={e => e.preventDefault()}>
    <img src={img} alt="..." />
  </a> 
</CardAvatar> 
<CardBody profile>
  <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
  <h4 className={classes.cardTitle}>Alec Thompson</h4>
  <p className={classes.description}>
    Don{"'"}t be scared of the truth because we need to restart the
    human foundation in truth And I love you like Kanye loves Kanye
    I love Rick Owens’ bed design but the back is...
  </p>
  <Button color="primary" round>
    Follow
  </Button>
</CardBody> 
</Card>
    </Card>
  );
}