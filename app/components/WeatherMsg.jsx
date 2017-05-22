var React = require('react');

var WeatherMsg = ({location, temp}) => {
  return (
    <h3 className="text-center">It is {temp} degrees in {location}</h3>
  );
}

module.exports = WeatherMsg;
