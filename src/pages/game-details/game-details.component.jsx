/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameDetails extends Component {
  componentDidMount() {
    const { id } = this.props.location.state;
    console.log(id);
  }

  render() {
    const { id, name } = this.props.location.state;
    return <h1>Hey from {name}</h1>;
  }
}

export default GameDetails;
