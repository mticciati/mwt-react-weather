import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();

    var search = encodeURIComponent(this.refs.search.value);

    if (search.length > 0) {
      this.refs.search.value = '';
      this.props.history.push('/api/' + search);
    }
  }

  render() {
    return ( 
      <form onSubmit={this.onSearch}>
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search weather by city" ref="search" />
          </li>
          <li>
            <input type="submit" className="button" value="Get Weather" />
          </li>
        </ul>
      </form>
    );
  }

}

const SearchFormWithRouter = withRouter(SearchForm);

export default SearchFormWithRouter;