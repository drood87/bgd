import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../components/header/header.component';
import SearchField from '../../components/search-field/search-field.component';
import GamesList from '../../components/games-list/games-list.component';
import './homepage.styles.scss';

class HomePage extends Component {
  state = {
    gamesData: [],
    // searchField: '',
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
      });
    } catch (e) {
      console.log(e);
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     searchField: e.target.value,
  //   });
  // };

  render() {
    const { gamesData } = this.state;
    return (
      <div className="homepage">
        <div className="search">
          <SearchField
            placeholder="Search Game"
            // handleChange={this.handleChange}
          />
        </div>
        <GamesList games={gamesData} />
      </div>
    );
  }
}

export default HomePage;
