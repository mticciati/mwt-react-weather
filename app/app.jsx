import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, Router, IndexRoute, browserHistory} from 'react-router';
// import { Router, Route, IndexRoute } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
// import App from 'App';
import Main from 'Main';
// import Weather from 'Weather';
// import About from 'About';
// import Examples from 'Examples';
//import routes from './routes.js';

// //browser history
// const history = createBrowserHistory()

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Main/>,
  document.getElementById("app")
); 