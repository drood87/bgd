/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import '../game-details/game-details.styles.scss';

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
    const { name, screenshot, cover } = this.props.location.state;
    const { summary, first_release_date } = this.state.gameDetails;

    return (
      <div className="game-details">
        <div
          className="game-details__backdrop"
          style={{
            background: `url("https://images.igdb.com/igdb/image/upload/t_screenshot_big_2x/${
              screenshot[0].image_id
            }.jpg") no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: 'auto',
            paddingTop: '50vh',
          }}
        />
        <div className="game-details__section">
          <div className="game-details__cover">
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_cover_uniform/${
                cover.image_id
              }.jpg`}
              alt={`${name} cover`}
            />
          </div>
          <div>
            <h1>{name}</h1>
            <div className="game-details__date">
              <Moment unix format="DD/MM/YYYY">
                {first_release_date}
              </Moment>
            </div>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GameDetails;
