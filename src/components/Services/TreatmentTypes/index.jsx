import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import accupuncture from './accupuncture.jpeg';
import cupping from './cupping.jpeg';
import massage from './massage.jpeg';
import herbs from './herbs.jpeg';
import PrimaryButton from '../../_shared/PrimaryButton';
import { APPOINTMENT_LINK } from '../../../constants/config';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 6,
    },
  },
  image: {
    maxWidth: 800,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  header: {
    paddingBottom: theme.spacing.unit * 3,
  },
});

class TreatmentTypes extends Component {
  constructor(props) {
    super(props);
    this.state = { direction: 'row' };
    this.setDirection = this.setDirection.bind(this);
  }

  componentDidMount() {
    this.setDirection();
    window.addEventListener('resize', this.setDirection);
  }

  componentWillUnmount() {
    window.removeEventListener();
  }

  setDirection() {
    const { width } = this.props;
    this.setState(isWidthUp('sm', width) ? { direction: 'row' } : { direction: 'column-reverse' });
  }

  render() {
    const { classes } = this.props;
    const { direction } = this.state;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={40}
            direction={direction}
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Typography variant="title" className={classes.header}>
                Acupuncture
              </Typography>
              <Typography variant="body2">
                Acupuncture, one of the modalities used in Traditional Chinese Medicine,
                is the insertion of sterile needles into the body at specific points that
                have been shown to help with the treatment of many different health issues.
                Acupuncture has been around for thousands of years, and continues to stay a
                prominent form of medicine because it is so effective at treating and helping
                people. There are over 1000 known points on the body, many of them are also
                well known trigger and motor points in western medicine. There is overwhelming
                evidence that acupuncture is a great way to naturally treat the body, and the
                World Health Organization (WHO) recommends it for many conditions including
                pain, digestive issues, respiratory issues, and many more.
              </Typography>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.image}>
              <img src={accupuncture} className={classes.img} alt="accupuncture" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 64 }}>
          <Grid
            container
            spacing={40}
            direction={direction}
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Typography variant="title" className={classes.header}>
                Cupping
              </Typography>
              <Typography variant="body2">
                Cupping has gotten a lot of press recently, especially as many of the 2016
                Olympians were seen with big red circles on their bodies. But cupping
                has been around for hundreds of years. The cups are placed on the body using
                some form of vacuum method, either suction or with heat to burn up the oxygen.
                Once the cups are placed on the body they can remain stationary or be moved
                around. It is used to lift the muscles, break up scar tissue and adhesions
                in the connective tissue, and promote circulation. Most people love the
                experience of cupping, as they feel their bodies are looser and more relaxed
                after. Some describe it as a deep tissue massage but without the compression
                aspect.
              </Typography>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.image}>
              <img src={cupping} className={classes.img} alt="cupping" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 64 }}>
          <Grid
            container
            spacing={40}
            direction={direction}
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Typography variant="title" className={classes.header}>
                Herbal Therapies
              </Typography>
              <Typography variant="body2">
                Chinese Herbal Medicine is in its own field. This is a very detailed and
                intricate way of coming up with customized formulas for each individual
                based on their Chinese Medical Diagnosis. Herbs can be given as bulk, where
                they are then decocted by the patient at home and made into a tea, or given
                as granules (powdered concentrates of the herbs) that will be mixed with
                hot water and taken as a tea, and there are many patents that exist as well
                in pill form. Herbs may need to be taken on a short or long term basis,
                depending on the nature of the complaint or issue.
              </Typography>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.image}>
              <img src={herbs} className={classes.img} alt="herbs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 64 }}>
          <Grid
            container
            spacing={40}
            direction={direction}
            justify="center"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
              <Typography variant="title" className={classes.header}>
               Body Work
              </Typography>
              <Typography variant="body2">
                We include many styles in our bodywork treatments, specifically
                Tui Na, which can best be described as medical massage that is
                applied to acupuncture points. We also use Shiatsu and Thai Massage,
                which are similar to Tui Na, and includes an element of stretching and
                joint manipulation. These modalities are beneficial for everyone, but
                perhaps especially people who don’t tolerate needles well or who both
                have musculoskeletal issues as well as internal complaints.
              </Typography>
            </Grid>
            <Grid item sm={3} xs={12} className={classes.image}>
              <img src={massage} className={classes.img} alt="massage" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 88 }}>
          <Grid
            container
            spacing={40}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <PrimaryButton title="Make an Appointment" link={APPOINTMENT_LINK} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

TreatmentTypes.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles, { name: 'Offerings' }),
  withWidth(),
)(TreatmentTypes);
