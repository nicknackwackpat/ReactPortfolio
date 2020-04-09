import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import NestedGrid from './../NestedGrid';
import PortfolioCard from './../PortfolioCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Portfolio() {

  const classes = useStyles();
  
  return (
  <>
    <NestedGrid>
        {/* <PortfolioCard useStyles={classes.root}>
        </PortfolioCard>
        <PortfolioCard useStyles={classes.root}>
        </PortfolioCard>
        <PortfolioCard useStyles={classes.root}>
        </PortfolioCard> */}
    </NestedGrid>
  </>
  );
};
