import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './games-list.styles.scss';

export default class GamesList extends Component {
  render() {
    const { games } = this.props;
    // (game.cover || {}).image_id in case cover is not there so undefined just cerate an empty object instead of throwing an error
    return (
      <>
        <div className="games">
          {games.map(game => (
            <div key={game.id}>
              <Link
                to={{
                  pathname: `/details/${game.slug}`,
                  state: { id: game.id, name: game.name },
                }}
              >
                <div className="game-image-container">
                  <img
                    className="game-image"
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_uniform/${
                      (game.cover || {}).image_id
                    }.jpg`}
                    alt={game.slug}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
};
