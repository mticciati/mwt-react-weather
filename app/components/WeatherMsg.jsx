import React from 'react';

const WeatherMsg = ({location, temp}) => (
  <h3 className="text-center">It is {temp} degrees in {location}</h3>
);

export default WeatherMsg;
