import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    marginRight: theme.spacing.unit * 16,
    marginLeft: theme.spacing.unit * 16,
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 4,
    },
  },
  button: {
    color: 'white',
    height: 44,
  },
});

function NavButtons(props) {
  const { classes } = props;
  return (
    <Hidden xsDown>
      <Grid container justify="space-around" className={classes.root}>
        <Grid item sm={1}>
          <Button className={classes.button} href="/">
            home
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/about/">
            about
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/services/">
            services
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/testimonials/">
            testimonials
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/resources/">
            resources
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/location/">
            location
          </Button>
        </Grid>
        <Grid item sm={1}>
          <Button className={classes.button} href="/contact/">
            contact
          </Button>
        </Grid>
      </Grid>
    </Hidden>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);
