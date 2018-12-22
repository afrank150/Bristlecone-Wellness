import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinkedText from '../../_shared/LinkedText';
import { NEW_PATIENT_FORM } from '../../../constants/config';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 3,
  },
});

function Forms(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={16}
        >
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={7}
          >
            <Typography variant="headline">
              New Patients
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={7}
          >
            <Typography variant="body2">
              {'For new patients coming to the clinic, we have an intake form for you to fill out. You can come to your appointment 15 minutes early or '}
              <LinkedText
                link={NEW_PATIENT_FORM}
                text="download the new patient form here"
                bold
                newPage
              />
              {' and bring it with you to your first visit.'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Forms.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forms);
