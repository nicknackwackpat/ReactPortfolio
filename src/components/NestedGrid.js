import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PortfolioCard from './PortfolioCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  const dummy = {line1:[
    {
      image: "../public/images/employee-manager.png",
      title: "Employee Manager",
      description: "A CLI application used for managing a company's employees using node.js, inquirer, and MySQL.",
      github: "https://github.com/nicknackwackpat/EmployeeManager",
      deployed: "https://github.com/nicknackwackpat/EmployeeManager"
    },
    {
      title: "Car Amplify",
      description: "A Node.js and Express Handlebars app for avid car lovers.",
      github: "https://github.com/nicknackwackpat/Car_amplify",
      deployed: "https://car-amplify.herokuapp.com/"
    },
    {
      title:"What2Do",
      description: "An appp designed for helping people find local events within a general radius.",
      github: "https://github.com/nicknackwackpat/What2Do",
      deployed: "https://nicknackwackpat.github.io/What2Do"
    },
  ]}

  function FormRow(props) {
    let array = props.array;

    return (
      <>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PortfolioCard image={array[0].image} title={array[0].title} description={array[0].description} deployed={array[0].deployed} github={array[0].github} ></PortfolioCard></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PortfolioCard title={array[1].title} description={array[1].description} deployed={array[1].deployed} github={array[1].github} ></PortfolioCard></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><PortfolioCard title={array[2].title} description={array[2].description} deployed={array[2].deployed} github={array[2].github} ></PortfolioCard></Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow array={dummy.line1}/>
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}