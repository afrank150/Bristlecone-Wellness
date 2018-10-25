import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Iframe from 'react-iframe';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PrimaryButton from '../../_shared/PrimaryButton';
import {
  APPOINTMENT_LINK,
  ADDRESS, MAP_IFRAME,
  ALT_FAM_LINK,
} from '../../../constants/config';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary[100],
    padding: theme.spacing.unit * 10,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
    },
  },
  textContainer: {
    paddingRight: theme.spacing.unit * 6,
  },
  locatedText: {
    paddingBottom: theme.spacing.unit * 2,
  },
  buildingLocation: {
    paddingTop: theme.spacing.unit * 2,
  },
  link: {
    color: theme.palette.primary[900],
    textDecoration: 'underline',
  },
  appointmentButton: {
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 3,
    },
  },
  mapItem: {
    display: 'flex',
    position: 'relative',
    height: '500px',
    [theme.breakpoints.down('sm')]: {
      height: '400px',
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
      <Grid container justify="center">
        <Grid item xs={12} sm={4} md={4} className={classes.textContainer}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="headline" className={classes.locatedText}>
                Located in Northwest Denver
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Lakeside Office Park Building
              </Typography>
              <Typography variant="body2">
                {ADDRESS}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" className={classes.buildingLocation}>
                {'Our office is on the 3rd floor located in the '}
                <a
                  href={ALT_FAM_LINK}
                  className={classes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Alternative Family Medicine and Chiropractic'}
                </a>
                {' business suite.'}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.appointmentButton}>
              <PrimaryButton link={APPOINTMENT_LINK} title="Book Online" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={7} className={classes.mapItem}>
          <Iframe
            className={classes.map}
            url={MAP_IFRAME}
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
