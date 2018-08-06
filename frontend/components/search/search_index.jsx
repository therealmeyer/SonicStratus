import React from "react";
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
 
  render () {
    const {results, display, query, index} = this.props;
      const dispClass = display ? 'block-search' : 'hidden-search';
      return (
        <ul className={dispClass} onMouseEnter={() => this.props.clearCursor()}>
          <li style={{paddingLeft : "15px"} } className="search-item-header">
            <p>{`Search for "${query}"`}</p>
          </li>
          {results.map((result, i) => <SearchIndexItem key={result.searchable_id} result={result} index={index} i={i}/>)}
        </ul>
      );
  }
}

export default SearchIndex;