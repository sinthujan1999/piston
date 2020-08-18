import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from "/home/sinthujan/Desktop/piston_team/src/Piston/white-wallpaper-11.jpg";
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function RemoveCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
        <img src= {img} alt="Logo" height="100%" width="50%" /> 
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Remove Card
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Card Holder Name" color="secondary" />
    
      <TextField id="standard-secondary" label="Card Number" color="secondary" />
    </form>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="contained"size="small" color="primary">
          Remove
        </Button>
        
      </CardActions>
    </Card>
  );
}