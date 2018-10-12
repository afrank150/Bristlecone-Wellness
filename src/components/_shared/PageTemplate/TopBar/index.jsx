import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from './logotext.svg';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topSection: {
    height: 220,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      height: 160,
      padding: 0,
    },
  },
});

function TopBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.topSection}
      >
        <Grid item md={10} sm={11} xs={12}>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
      </Grid>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
