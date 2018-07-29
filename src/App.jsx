import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './utils/theme';


function App(props) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
