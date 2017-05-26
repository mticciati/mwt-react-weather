import React from 'react';
import { NavLink } from 'react-router-dom';
import { IndexLink } from 'react-router';
//import SearchForm from 'SearchForm';

export default class Nav extends React.Component {

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
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
    );
  }
}

  // 
            // 
            // 
          // 
      //  

//         <div className="top-bar-right">
//           <SearchForm />
//         </div>
        
//       