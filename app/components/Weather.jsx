import React from 'react';
import WeatherFormWithRouter from 'WeatherForm';
import WeatherMsg from 'WeatherMsg';
import Modal from 'Modal';
import openWeatherMap from 'openWeatherMap';
import queryString from 'query-string';

export default class Weather extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isLoading: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    let that = this;
    console.log('reached search');
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
    let location = this.props.match.params.city;
    console.log('location ', location);

    if (location && location.length > 0 ){
      this.handleSearch(location);
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.match.params.city;
    console.log(newProps);
    console.log('location ', location);

    if (location && location.length > 0 ){
      this.handleSearch(location);
    }
  }

  render() {
    let {isLoading, location, temp, modalMessage} = this.state;

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
        <WeatherFormWithRouter onSearch={this.handleSearch}/> 
        {renderMessage()}
        {renderError()}
      </div>
    ); 
  }
  
}