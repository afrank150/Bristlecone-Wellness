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
  title: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
  descriptions: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
  price: {
    padding: theme.spacing.unit,
    textAlign: 'center',
  },
});

function Pricing(props) {
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
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Initial Consultation and Treatment
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (75 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              For new patients to the clinic
            </Typography>
            <Typography variant="title" className={classes.price}>
              $90
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
             Follow Up Treatment
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              A personalized treatment based on your needs and constitution
            </Typography>
            <Typography variant="title" className={classes.price}>
              $75
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Herb Only Consult
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (30 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Comprehensive evalutation for a custom formula
            </Typography>
            <Typography variant="title" className={classes.price}>
              $40
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: 64 }}>
        <Grid
          container
          spacing={40}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Cupping Session
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (20 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              A quicker visit to promote circulation for healing, recovery, and to
              relieve muscle tension
            </Typography>
            <Typography variant="title" className={classes.price}>
              $20
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
             Massage
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 or 90 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Offering a combination of Tui Na, Thai massage, and Shiatsu.
            </Typography>
            <Typography variant="title" className={classes.price}>
              $75 / $90
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Follow Up Treatment 4-pack
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 minutes each)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Recieve 10% off when booking 4 appointments
            </Typography>
            <Typography variant="title" className={classes.price}>
              $270
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);
