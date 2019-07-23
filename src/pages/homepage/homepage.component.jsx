import React, { Component } from 'react';

import SearchField from '../../components/search-field/search-field.component';
import GamesList from '../../components/games-list/games-list.component';
import './homepage.styles.scss';

class HomePage extends Component {
  state = {
    gamesData: [],
    isLoaded: false,
  };

  async componentDidMount() {
    try {
      // fetch data from backend (whole company)
      const res = await fetch(
        'https://shrouded-shelf-16885.herokuapp.com/company',
      );
      const data = await res.json();

      // set gamesData data in state
      this.setState({
        gamesData: [...data[0].published],
        isLoaded: true,
      });
    } catch (e) {
      throw e;
    }
  }

  render() {
    const { gamesData } = this.state;
    const { isLoaded } = this.state;
    return (
      <div className="homepage">
        <div className="search">
          <SearchField placeholder="Search Game" />
        </div>
        <GamesList games={gamesData} isLoaded={isLoaded} />
      </div>
    );
  }
}

export default HomePage;
