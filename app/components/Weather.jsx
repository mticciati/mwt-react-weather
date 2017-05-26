import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMsg from 'WeatherMsg';
// import Modal from 'Modal';
// import openWeatherMap from 'openWeatherMap';

default export class Weather extends React.Component{

  getInitialState() {
    return {
      isLoading: false
    };
  },

  handleSearch(location) {
    alert(location)
    // var that = this;

    // this.setState({ 
    //   isLoading: true,
    //   modalMessage: undefined
    // });

    // openWeatherMap.getTemp(location).then(function(temp) {
    //   that.setState({
    //     location: location,
    //     temp: temp,
    //     isLoading: false
    //   });
    // }, function(err) {
    //   that.setState({ 
    //     isLoading: false,
    //     modalMessage: err.message 
    //   });
    // });
  },

  render() {
    var {isLoading, location, temp, modalMessage} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      }
      else if (temp && location) {
        return <WeatherMsg location={location} temp={temp}/>;
      }
    }

    function renderError() {
      if (modalMessage !== undefined) {
        return (
          <Modal message={modalMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}