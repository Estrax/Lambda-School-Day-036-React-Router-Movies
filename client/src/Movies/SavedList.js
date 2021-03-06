import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} className="saved-movie" key={movie.id}>{movie.title}</NavLink>
        ))}
        <NavLink to="/" className="home-button">Home</NavLink>
      </div>
    );
  }
}
