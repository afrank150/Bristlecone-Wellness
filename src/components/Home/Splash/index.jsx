import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import PrimaryButton from '../../_shared/PrimaryButton';
import BristleconePine from './IMG_0792.JPG';
import { APPOINTMENT_LINK } from '../../../constants/config';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    // backgroundImage: 'linear-gradient(#c0dece, transparent) !important',
  },
  content: {
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 6,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing.unit * 10,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit * 8,
      paddingBottom: theme.spacing.unit * 4,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing.unit * 4,
    },
  },
  appointmentButton: {
    paddingBottom: theme.spacing.unit * 10,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit * 8,
    },
  },
});

function Splash(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root} style={{ backgroundImage: `url(${BristleconePine})` }}>
      <Grid item xs={12}>
        <Hidden smDown>
          <Typography variant="display4" className={classes.content}>
            Be Strong
            <br />
            Be Resilient
            <br />
            Be Well
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="display3" className={classes.content}>
            Be Strong
            <br />
            Be Resilient
            <br />
            Be Well
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.appointmentButton}>
          <PrimaryButton link={APPOINTMENT_LINK} title="Make an Appointment" />
        </div>
      </Grid>
    </Grid>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
