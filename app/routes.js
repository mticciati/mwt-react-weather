import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';


const routes = {
  // base component (wrapper for the whole application).
  component: Main,
  childRoutes: [

    {
      path: '/weather',
      component: Weather
    },

    {
      path: '/about',
      component: About
    },

    {
      path: '/examples',
      component: Examples
    }

  ]
};

export default routes;