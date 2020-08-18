import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ImgMedia from './AddCard';
import RemoveCard from './RemoveCard';
import AddCard from './AddCard';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}







const useStyles = makeStyles((theme) => ({
  root: {

    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      height: theme.spacing(70),
    },
  },
}));

const mystyle = {
  backgroundImage:
    'linear-gradient( 166deg, rgb(255, 255, 255) 19%, rgb(23, 255, 255) 80%, rgb(23, 255, 255) 70%)',
  // color:
  // boxShadow: '20 20px 10px 90 rgba(255,255,255)',
  // 'linear-gradient( 136deg, rgb(23, 48, 232) 0%, rgb(23, 211, 232) 50%, rgb(23, 48, 232) 100%)',
  fontFamily: "Arial",
  color:"black"
  
};

export default function SimplePaper() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <Paper elevation={3} >
    <AppBar position="static" style={mystyle}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Add Card" {...a11yProps(0)} />
          <Tab label="Remove Card" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AddCard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RemoveCard/>
      </TabPanel>
        </Paper>
    </div>
  );
}

