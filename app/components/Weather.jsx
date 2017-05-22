var React = require('react'),
WeatherForm = require('WeatherForm'),
WeatherMsg = require('WeatherMsg'),
openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(err) {
      alert(err);
      that.setState({ isLoading: false });
    });
  },

  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      }
      else if (temp && location) {
        return <WeatherMsg location={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
