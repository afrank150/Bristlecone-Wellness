import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
import TreatmentTypes from './TreatmentTypes';
import Pricing from './Pricing';


const styles = theme => ({
  rates: {
    background: theme.palette.primary[100],
  },
});

function Services(props) {
  const { classes } = props;

  return (
    <PageTemplate>
      <PageDescription text="Services & Rates" />
      <TreatmentTypes />
      <div className={classes.rates}>
        <Pricing />
      </div>
    </PageTemplate>
  );
}

Services.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Services);
