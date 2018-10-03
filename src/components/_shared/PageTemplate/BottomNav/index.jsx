import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import PhoneIcon from '@material-ui/icons/Phone';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { PHONE_NUMBER, ADDRESS } from '../../../../constants/config';
import logo2 from './logo2.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[300],
  },
  logo: {
    justifyContent: 'center',
    display: 'flex',
  },
  img: {
    width: '300px',
    height: '300px',
  },
});

function BottomNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.logo}>
            <img src={logo2} className={classes.img} alt="logo" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
