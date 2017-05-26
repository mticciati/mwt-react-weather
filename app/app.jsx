import React from 'react';
import ReactDOM from 'react-dom';
// import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from 'Main';
// Weather = require('Weather'),
// About = require('About'),
// Examples = require('Examples');

//browser history
const history = createBrowserHistory()

//Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={Main}> 
      <IndexRoute component={Weather}/>
      
    </Route>
  </Router>,
  document.getElementById("app")
);

// <Route path="about" component={About}/>
//       <Route path="examples" component={Examples}/>
//       