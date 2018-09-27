import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { PHONE_NUMBER, ADDRESS } from '../../../../constants/config';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[300],
    margin: 0,
  },
  container: {
    height: 100,
  },
  icon: {
    color: 'black',
    height: '16px',
    width: '16px',
    verticalAlign: 'baseline',
  },
  iconText: {
    whiteSpace: 'nowrap',
  },
});

function BottomNav(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={6}>
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <PhoneIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.iconText}>
            <Typography variant="body2">
              { PHONE_NUMBER }
            </Typography>
          </Grid>
          <Grid item>
            <LocationOnIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.iconText}>
            <Typography variant="body2">
              { ADDRESS }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justify="center"
        >
          <Grid item className={classes.iconText}>
            <Typography variant="body2">
              Bristlecone Wellness, LLC
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
