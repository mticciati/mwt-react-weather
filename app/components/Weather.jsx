import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMsg from 'WeatherMsg';
import Modal from 'Modal';
import openWeatherMap from 'openWeatherMap';
import queryString from 'query-string';

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    var that = this;

    this.setState({ 
      isLoading: true,
      modalMessage: undefined,
      location: undefined,
      temp: undefined
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
  }

  componentDidMount() {
    var location = queryString.parse(this.props.location.hash).location;
    console.log(this.props);
    console.log('location ', location);

    if (location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '/';
    }
  }

  componentWillReceiveProps(newProps) {
    var location = queryString.parse(newProps.location.hash).location;
    console.log(newProps);
    console.log('location ', location);

    if (location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '/';
    }
  }

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