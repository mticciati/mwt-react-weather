import React from 'react';
import PropTypes from 'prop-types';
// import Nav from 'Nav';
import { Route, IndexRoute, BrowserRouter as Router } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { IndexLink } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
// import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import Example from 'Example';

//browser history
const history = createBrowserHistory()

const Main = () => (
  <Router history={history}>
    <div>  
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
               <NavLink to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
             </li>
             <li>
               <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
             </li>
             <li>
               <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
             </li>                  
          </ul>
        </div>
          
      </div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <Route path="/about" component={About}/>
          <Route path="/examples" render={({path}) => (
            <div>
              <Route exact path={path} component={Examples} />
              <Route path={path+'?:location'} compotent={Example} /> 
            </div>
          )}/>  

        </div>
      </div>    
    </div>  
  </Router>
);

// Main.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default Main;