import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageTemplate from '../_shared/PageTemplate';

const styles = {
  text: {
    padding: 100,
    textAlign: 'center',
  },
};

function Contact(props) {
  const { classes } = props;

  return (
    <PageTemplate>
      <Typography variant="headline" className={classes.text}>
        Resources Coming Soon...
      </Typography>
    </PageTemplate>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
