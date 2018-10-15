import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 3,
  },
});

function Forms(props) {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Typography variant="title">
          Form Links:
        </Typography>
      </Grid>
    </Grid>
  );
}

Forms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forms);
