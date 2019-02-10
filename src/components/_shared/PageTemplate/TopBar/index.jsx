import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import logo from './logotext.svg';
import logoSmall from './logo.svg';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topSection: {
    height: 220,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  },
  logoSmall: {
    height: 135,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing.unit * 1,
  },
  logoSmallText: {
    color: '#3c6e5d',
    fontFamily: '"Julius Sans One", sans-serif',
    fontWeight: 200,
    fontSize: '24px',
    letterSpacing: '8px',
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 2,
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
        <Hidden xsDown>
          <Grid item md={10} sm={11}>
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={10}>
            <img src={logoSmall} className={classes.logoSmall} alt="logoSmall" />
          </Grid>
          <Grid item xs={10} className={classes.logoSmallText}>
            Bristlecone
            <br />
            Wellness
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
