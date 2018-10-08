import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 3,
  },
  intro: {
    textAlign: 'center',
  },
});

function Intro(props) {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid item xs={12}>
        <Grid
          container
          spacing={40}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={7} md={5} className={classes.intro}>
            <Typography variant="body2">
              Here at Bristlecone Wellness we treat many different conditions
              ranging from the common cold to diabetes. With acupuncture and Traditional
              Chinese Medicine, almost any condition can be improved.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);
