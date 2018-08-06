import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndexItem extends React.Component {

  constructor(props) {
    super(props);
    const {index, i} = this.props;
    const background = index === i ? "#333" : "black";
    this.state = {
      background
    };
  }

  componentWillReceiveProps(newProps) {
    const { index, i } = newProps;
    const background = index === i ? "#333" : "black";
    this.setState({background});
  }

  render() {
    console.log(this.props);
    const {result} = this.props;
    if (result.searchable_type === "User") {
      return (
        <Link to={`/users/${result.searchable_id}`}>
          <li className="search-item" 
            onMouseEnter={() => this.setState({background: "#333"})}
            onMouseLeave={() => this.setState({background: "black"})} 
            style={{ paddingLeft: "15px", background: this.state.background }} 
            key={result.searchable_id}>
            <i className="fa fa-search search-item-icon" aria-hidden="true"></i>
            <p>{result.content}</p>
          </li>
        </Link>
      );
    } else if (result.searchable_type === "Track") {
      return (
        <Link to={`/tracks/${result.searchable_id}`}>
          <li className="search-item" style={{ paddingLeft: "15px", background: background }} key={result.searchable_id}>
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
}

export default SearchIndexItem;
