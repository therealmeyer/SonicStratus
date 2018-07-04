import React from "react";
import SearchIndexItem from './search_index_item';

const SearchIndex = ({results, display, query}) => {
  const dispClass = display ? 'block-search' : 'hidden-search';
  return (
    <ul className={dispClass} >
      <li style={{paddingLeft : "15px"} } className="search-item-header">
        <p>{`Search for "${query}"`}</p>
      </li>
      {results.map(result => <SearchIndexItem key={result.searchable_id} result={result} />)}
    </ul>
  );
};

export default SearchIndex;