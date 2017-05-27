import React from 'react';

//stateless functional component
const About = (props) => (
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>This is a test application built with React.</p>
    <p>Here are the tools I used:</p>
    <ol>
      <li><a href="https://facebook.github.io/react" title="React">React</a></li>
      <li><a href="https://openweathermap.org" title="Open Weather Map">Open Weather Map</a></li>
    </ol>
  </div>
);


export default About;
