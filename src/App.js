import React, { Component } from 'react';
import { Route, Switch, withRouter,BrowserRouter } from 'react-router-dom';

import './App.css';
import input from "./input";
import Homepage from "./HomePage";
import search from './search';
import school from './school';
import general from './general';
import home from './home';
import leisure from './leisure';

class App extends Component {
  render() {
    return (

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Homepage} />

    <Route path="/input" component={input} />
    <Route path="/homepage" component={Homepage} />
    <Route path="/search" component={search} />
    
    <Route path="/school" component={school} />
    <Route path="/general" component={general} />
    <Route path="/home" component={home} />
    <Route path="/leisure" component={leisure} />

  </Switch>
</BrowserRouter>


);
}
}
export default withRouter(App);