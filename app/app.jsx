import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import routes from './routes.js';

//browser history
const history = createBrowserHistory()

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render((
  <Router history={history} routes={routes} />),
  document.getElementById("app")
);      

  // <Route exact path="/" component={Main}>
  //     <Route path="about" component={About}/>
  //     <Route path="examples" component={Examples}/>
  //   </Route>
  //   <IndexRoute component={Weather}/>