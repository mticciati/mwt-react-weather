var React = require('react');

//stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a test application built with React.</p>
      <p>Here are the tools I used:</p>
      <ol>
        <li><a href="https://facebook.github.io/react" title="React">React</a></li>
        <li><a href="https://openweathermap.org" title="Open Weather Map">Open Weather Map</a></li>
      </ol>
    </div>
  );
};  

module.exports = About;
