var React = require('react'),
WeatherForm = require('WeatherForm'),
WeatherMsg = require('WeatherMsg'),
Modal = require('Modal'),
openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({ 
      isLoading: true,
      modalMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      that.setState({ 
        isLoading: false,
        modalMessage: err.message 
      });
    });
  },

  render: function() {
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
});

module.exports = Weather;
