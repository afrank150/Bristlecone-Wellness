import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary[100],
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 2,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit,
    },
  },
  mapItem: {
    display: 'flex',
    position: 'relative',
    height: '600px',
    [theme.breakpoints.down('sm')]: {
      height: '450px',
    },
  },
  map: {
    height: '100vh',
  },
});

function Location(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography variant="headline">
            Located in Northwest Denver
          </Typography>
          <Typography variant="body2">
            4704 N Harlan St. Suite 340 Denver CO, 80212
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} className={classes.mapItem}>
          <Iframe
            className={classes.map}
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.092018691498!2d-105.06372948452587!3d39.78249027944396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b87bc7563616f%3A0xbaecbceea508ba00!2s4704+N+Harlan+St%2C+Denver%2C+CO+80212!5e0!3m2!1sen!2sus!4v1537719162719"
            allowfullscreen
          />
        </Grid>
      </Grid>
    </div>
  );
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);
