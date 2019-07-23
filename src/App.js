import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import GameDetails from './pages/game-details/game-details.component';

import './App.css';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

const App = () => (
  <div className="App">
    <Header />
    <Scroll>
      <Switch>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          exact
          path="/"
          component={HomePage}
        />
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          path="/details/:game"
          component={GameDetails}
        />
      </Switch>
    </Scroll>
  </div>
);

export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/details/:game" component={GameDetails} />
//         </Switch>
//       </div>
//     );
//   }
// }
