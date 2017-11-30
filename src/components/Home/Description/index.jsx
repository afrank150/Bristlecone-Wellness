import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    height: 400,
    textAlign: 'center',
  },
  header: {
    verticalAlign: 'middle',
    marginBottom: theme.spacing.unit * 2,
  },
});

function Description(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography type="headline" className={classes.header}>
        Accupuncture and traditional Chinese medicine
      </Typography>
      <Typography type="body2" className={classes.body}>
        Specializing in pain management and digestive health.
      </Typography>
    </div>
  );
}

Description.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Description);
