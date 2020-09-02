import React, { Component } from "react";


export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.count} Books found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort} onChange={this.props.handleChangeSort}>
              <option value="">Select</option>
              <option value="highest">Highest to lowest</option>
              <option value="lowest">Lowest to highest</option>     
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            Filter Genre
            <select
              className="form-control" value={this.props.genre} onChange={this.props.handleChangeGenre} >
              <option value="">ALL</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Adventure">Adventure</option>
              <option value="Romance">Romance</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Dystopian">Dystopian</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
              
            </select>
          </label>
        </div>
      </div>
    );
  }
}
