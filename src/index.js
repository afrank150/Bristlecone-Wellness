import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

/* ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
); */

ReactDOM.render(
  React.createElement(Routes),
  document.getElementById('root'),
);
registerServiceWorker();
