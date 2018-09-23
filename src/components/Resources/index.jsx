import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Banner from '../_shared/Banner';
import TopBar from '../_shared/TopBar';
import NavBar from '../_shared/NavBar';

const styles = {
  text: {
    padding: 100,
    textAlign: 'center',
  },
};

function Resources(props) {
  const { classes } = props;

  return (
    <div>
      <Banner />
      <TopBar />
      <NavBar />
      <Typography variant="headline" className={classes.text}>
        Resources Coming Soon...
      </Typography>
    </div>
  );
}

Resources.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resources);
