import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({result}) => {
  if (result.searchable_type === "User") {
    return (
      <Link to={`/users/${result.searchable_id}`}>
        <li className="search-item" style={{ paddingLeft: "15px" }} key={result.searchable_id}>
          <i className="fa fa-search search-item-icon" aria-hidden="true"></i>
          <p>{result.content}</p>
        </li>
      </Link>
    );
  } else if (result.searchable_type === "Track") {
    return (
      <Link to={`/tracks/${result.searchable_id}`}>
        <li className="search-item" style={{ paddingLeft: "15px" }} key={result.searchable_id}>
          <i className="fa fa-search search-item-icon" aria-hidden="true"></i>
          <p>{result.content}</p>
        </li>
      </Link>
    )

  } else if (result.searchable_type === "No Results") {
    return (
      <li className="search-item" style={{ paddingLeft: "5px"}} key={result.searchable_id}>
        <i className="fa fa-search search-item-icon" aria-hidden="true"></i>
        <p>{result.content}</p>
      </li>
    );
  }
}

export default SearchIndexItem;
