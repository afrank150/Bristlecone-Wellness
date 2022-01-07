import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
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
              $110
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Acupuncture Follow-Up
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              A personalized treatment based on your needs and constitution
            </Typography>
            <Typography variant="title" className={classes.price}>
              $85
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Acupuncture Follow-Up + LED Therapy
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Acupunture with the healing benefits of LED therapy
            </Typography>
            <Typography variant="title" className={classes.price}>
              $105
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
              Cosmetic Acupuncture
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (75 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Facial acupuncture + LED therapy to imporve skin complexion and tone
            </Typography>
            <Typography variant="title" className={classes.price}>
              $150
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Cupping Session
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (30 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              A quicker visit to promote circulation for healing, recovery, and to
              relieve muscle tension
            </Typography>
            <Typography variant="title" className={classes.price}>
              $45
            </Typography>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Typography variant="title" className={classes.title}>
              Body Work
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              (60 or 90 minutes)
            </Typography>
            <Typography variant="body2" className={classes.descriptions}>
              Offering a combination of Tui Na, Thai massage, and Shiatsu.
            </Typography>
            <Typography variant="title" className={classes.price}>
              $85 / $105
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 64 }}>
            <Typography variant="body1" style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Accepting payment from a Health Saving Account (HSA) or a Flex Spending Account (FSA)
              for qualified expenses.
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: 16 }}>
            <Typography variant="body1" style={{ textAlign: 'center', fontStyle: 'italic' }}>
              Ask about our package deals for a 10% discount!
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
