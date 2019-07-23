import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './games-list.styles.scss';
import Overdrive from 'react-overdrive';

import Spinner from '../loading-spinner/loading-spinner.component';

export default class GamesList extends Component {
  render() {
    const { games } = this.props;
    const { isLoaded } = this.props;

    // (game.cover || {}).image_id in case cover is not
    // there so undefined just cerate an empty object
    // instead of throwing an error

    return (
      <>
        <div className="games">
          {games.map(game => (
            <div key={game.id}>
              <Link
                to={{
                  pathname: `/details/${game.slug}`,
                  state: {
                    id: game.id,
                    name: game.name,
                    screenshot: game.screenshots,
                    cover: game.cover,
                  },
                }}
              >
                <div className="game-image-container">
                  <Overdrive id={game.id}>
                    {isLoaded ? (
                      <img
                        className="game-image"
                        src={`https://images.igdb.com/igdb/image/upload/t_cover_uniform/${
                          (game.cover || {}).image_id
                        }.jpg
                      `}
                        alt={game.slug}
                      />
                    ) : (
                      <Spinner />
                    )}
                  </Overdrive>
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
  games: PropTypes.any,
}.isRequired;
