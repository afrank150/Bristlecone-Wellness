import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import pain from './pain.jpg';
import sick from './sick.jpg';
import digestive from './digestive.jpg';
import women from './women.jpg';

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

class Offerings extends Component {
  constructor(props) {
    super(props);
    this.state = { direction: '' };
    this.setDirection = this.setDirection.bind(this);
  }

  componentWillMount() {
    this.setDirection();
  }

  componentDidMount() {
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
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={5} xs={12} className={classes.image}>
              <img src={pain} className={classes.img} alt="pain" />
            </Grid>
            <Grid item sm={5} xs={12}>
              <Typography variant="title" className={classes.header}>
                Suffering with pain?
              </Typography>
              <Typography variant="body2">
                Whether you are dealing with an acute injury or chronic pain, here at
                Bristlecone Wellness we will take a holistic approach to your treatment plan. See how we
                can naturally get you back to doing what you love!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 64 }}>
          <Grid
            container
            spacing={40}
            justify="center"
            alignItems="center"
            direction={direction}
          >
            <Grid item sm={5} xs={12}>
              <Typography variant="title" className={classes.header}>
                Sick and tired of being sick and tired?
              </Typography>
              <Typography variant="body2">
                Traditional Chinese medicine’s approach to internal medicine can majorly shift
                your energy levels and well-being. At Bristlecone Wellness you will be evaluated
                and prescribednpersonalized formulas and treatments alongside lifestyle and
                nutrition counseling.
              </Typography>
            </Grid>
            <Grid item sm={5} xs={12} className={classes.image}>
              <img src={sick} className={classes.img} alt="sick" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 64 }}>
          <Grid
            container
            spacing={40}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={5} xs={12} className={classes.image}>
              <img src={digestive} className={classes.img} alt="digestive" />
            </Grid>
            <Grid item sm={5} xs={12}>
              <Typography variant="title" className={classes.header}>
                Seeking digestive health?
              </Typography>
              <Typography variant="body2">
                Food is a very important part of maintaining our health and energy. But for
                some, eating can be a very uncomfortable experience. Let us help you find out what
                your body needs to feel balanced, nourished and comfortable.
              </Typography>
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
            <Grid item sm={5} xs={12}>
              <Typography variant="title" className={classes.header}>
                {"We are a great choice for women's health and fertility"}
              </Typography>
              <Typography variant="body2">
                Whether you suffer from PMS symptoms or menopause, or are trying to
                get pregnant, or are looking for support with pregnancy, here at
                Bristlecone Wellness we’ve got your covered.  Acupuncture and
                Traditional Chinese Medicine have been shown to be safe and effective
                ways to help with these issues that many women face during their lifetime.
                Don’t wait, make an appointment today!
              </Typography>
            </Grid>
            <Grid item sm={5} xs={12} className={classes.image}>
              <img src={women} className={classes.img} alt="women" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Offerings.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles, { name: 'Offerings' }),
  withWidth(),
)(Offerings);
