import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from './utils/theme';
import './App.css';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Splash from './components/Splash/Splash';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <TopBar />
        <NavBar />
        <Splash />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
