import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PageTemplate from '../_shared/PageTemplate';

const styles = {
  text: {
    padding: 100,
    textAlign: 'center',
    height: '400px',
  },
};

function Services(props) {
  const { classes } = props;

  return (
    <PageTemplate>
      <Typography variant="title" className={classes.text}>
        Testimonials are Coming Soon...
      </Typography>
    </PageTemplate>
  );
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
