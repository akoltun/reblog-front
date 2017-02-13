import React, { PropTypes } from 'react';
import { parse } from 'qs';

import { browserHistory as history } from 'react-router';

import Search from 'components/elements/Search';

class SearchContrainer extends React.Component {
  constructor(props) {
    super(props);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch(event) {
    const path = this.props.onChange({
      search: event.currentTarget.value || undefined
    });

    if ('search' in parse(history.getCurrentLocation().search.slice(1))) {
      history.replace(path);
    } else {
      history.push(path);
    }
  }

  render() {
    return (
      <Search defaultValue={this.props.search} onChange={this.doSearch}/>
    );
  }
}

SearchContrainer.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchContrainer;
