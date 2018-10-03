import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 6,
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  header: {
    verticalAlign: 'middle',
  },
  divider: {
    margin: 'auto',
    width: '20%',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 4,
    borderBottom: '1px solid black',
  },
});

function PageDescription(props) {
  const { classes, text } = props;

  return (
    <div className={classes.root}>
      <Typography variant="headline" className={classes.header}>
        {text}
      </Typography>
      <div className={classes.divider} />
    </div>
  );
}

PageDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageDescription);
