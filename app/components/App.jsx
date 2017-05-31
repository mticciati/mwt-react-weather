import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import Example from 'Example';
import SearchFormWithRouter from 'SearchForm';



const App = () => ( 
  <div>  
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather</li>
          <li>
             <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
           </li>
           <li>
             <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
           </li>
           <li>
             <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
           </li>                  
        </ul>
      </div>
      <div className="top-bar-right">
        <SearchFormWithRouter />
      </div>
    </div>
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        <Route exact path="/" component={Weather}/>
        <Route path="/api/:city" component={Weather} />
        <Route path="/about" component={About}/>
        <Route path="/examples" render={({path}) => (
          <div>
            <Route exact path={path} component={Examples} />
          </div>
        )}/>  

      </div>
    </div> 
  </div>  
);

export default App;