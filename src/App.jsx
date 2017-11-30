import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './utils/theme';


function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
