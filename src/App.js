import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import GameDetails from './pages/game-details/game-details.component';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/details/:game" component={GameDetails} />
    </Switch>
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
