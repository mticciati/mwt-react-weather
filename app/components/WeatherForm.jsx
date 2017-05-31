import React from 'react';
import { withRouter } from 'react-router-dom';

class WeatherForm extends React.Component {

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.history.push('/api/' + location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="search" placeholder="Search weather by city" ref="location" /></div>
          <div><button className="button expanded hollow ">Get Weather</button></div>
        </form>
      </div>
    );
  }
}

const WeatherFormWithRouter = withRouter(WeatherForm);

export default WeatherFormWithRouter;