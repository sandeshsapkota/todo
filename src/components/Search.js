import React, { Component } from "react";
import Emptybox from "./Emptybox";
class Search extends Component {
  render() {
    return (
      <form className="search__form" onSubmit={this.handleSubmit}>
        <div>
          <input
            type="search"
            placeholder="Add your item here ..."
            onChange={this.props.change}
          />
          <input type="submit" value="Add" onClick={this.props.submit} />
          {this.props.hasSubmited && <Emptybox/>}
        </div>
      </form>
    );
  }
}
export default Search;
