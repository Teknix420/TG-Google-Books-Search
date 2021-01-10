import React, { Component } from "react";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Saved from './pages/Saved.js';
import Search from './pages/Search.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div>
        <Nav />
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h3>Search for and Save Books</h3>
        </Jumbotron>
        <BrowserRouter>
          <Switch>
            <Route path='/search' component={Search} />
            <Route path='/' component={Saved} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
