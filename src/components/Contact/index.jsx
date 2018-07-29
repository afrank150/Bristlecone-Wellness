import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TopBar from '../_shared/TopBar';
import NavBar from '../_shared/NavBar';

const styles = {
  text: {
    padding: 100,
    textAlign: 'center',
  },
};

function Contact(props) {
  const { classes } = props;

  return (
    <div>
      <TopBar />
      <NavBar />
      <Typography variant="headline" className={classes.text}>
        Blog Coming Soon...
      </Typography>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
