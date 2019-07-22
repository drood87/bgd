/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameDetails extends Component {
  state = {
    gameDetails: {},
  };

  async componentDidMount() {
    const { id } = this.props.location.state;
    const res = await fetch(
      'https://shrouded-shelf-16885.herokuapp.com/gameDetails',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
        }),
      },
    );
    const data = await res.json();

    this.setState({
      gameDetails: data[0],
    });
  }

  render() {
    const { name } = this.props.location.state;
    const { summary } = this.state.gameDetails;
    return (
      <div>
        <h1>{name}</h1>
        <p>{summary}</p>
      </div>
    );
  }
}

export default GameDetails;
