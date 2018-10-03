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
    backgroundColor: theme.palette.primary[100],
    margin: 0,
  },
  container: {
    height: 28,
  },
  icon: {
    color: theme.palette.grey[600],
    height: '12px',
    width: '12px',
    verticalAlign: 'baseline',
    paddingLeft: '8px',
  },
  iconText: {
    whiteSpace: 'nowrap',
  },
});

function Banner(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} sm={6}>
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justify="center"
          wrap="nowrap"
        >
          <Grid item>
            <PhoneIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.iconText}>
            <Typography variant="caption">
              { PHONE_NUMBER }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9} sm={6}>
        <Grid
          container
          className={classes.container}
          alignItems="center"
          justify="center"
          wrap="nowrap"
        >
          <Grid item>
            <LocationOnIcon className={classes.icon} />
          </Grid>
          <Grid item className={classes.iconText}>
            <Typography variant="caption">
              { ADDRESS }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
