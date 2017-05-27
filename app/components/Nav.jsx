import React from 'react';
import { Route, IndexRoute } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { IndexLink } from 'react-router';
// import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
//import SearchForm from 'SearchForm';

export default class Nav extends React.Component {

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
               <NavLink to="weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
             </li>
             <li>
               <NavLink to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
             </li>
             <li>
               <NavLink to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
             </li>                  
          </ul>
          <Route path="about" component={About}/>
          <Route path="examples" component={Examples}/>  
        </div>
        
      </div>
    );
  }
}

    // <IndexRoute component={Weather}/>
    //     

//         <div className="top-bar-right">
//           <SearchForm />
//         </div>
        
//       

            //<li className="menu-text">
            //   <IndexLink to="/">React Weather</IndexLink>
            // </li>