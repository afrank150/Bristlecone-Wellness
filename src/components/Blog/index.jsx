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

function Blog(props) {
  const { classes } = props;

  return (
    <PageTemplate>
      <Typography variant="headline" className={classes.text}>
        Resources Coming Soon...
      </Typography>
    </PageTemplate>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
