import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TopBar from '../_shared/TopBar';
import NavBar from '../_shared/NavBar';

const styles = {
  text: {
    padding: 100,
    textAlign: 'center',
  },
};

function Location(props) {
  const { classes } = props;

  return (
    <div>
      <TopBar />
      <NavBar />
      <Typography type="headline" className={classes.text} >
        Location Coming Soon...
      </Typography>
    </div>
  );
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);
