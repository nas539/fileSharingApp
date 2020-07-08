import React, { Component } from 'react';
import FileShare from './pages/fileShare/fileShare'
import Auth from "./pages/login/auth"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
 

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route path="/files" component={FileShare} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
