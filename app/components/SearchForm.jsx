import React from 'react';

class SearchForm extends React.Component {

  onSearch(e) {
    e.preventDefault();
    alert('Not yet wired up');

    // var location = this.refs.location.value;

    // if (location.length > 0) {
    //   this.refs.location.value = '';
    //   this.props.onSearch(location)
    // }
  }

  render() {
    return ( 
      <form onSubmit={this.onSearch}>
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search weather by city" ref="location" />
          </li>
          <li>
            <input type="submit" className="button" value="Get Weather" />
          </li>
        </ul>
      </form>
    );
  }

}

export default SearchForm;