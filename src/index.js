import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import thunk from "redux-thunk"

import { Teams, TeamDescription, UserDescription, Users } from './pages';
import { NavBar, PrivateRoute } from "./components";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history}>
      <div>
        <NavBar />
        <div style={{ padding: '20px' }}>
          <Switch>
            <PrivateRoute path="/team/:id" component={TeamDescription} />
            <PrivateRoute path="/users/:id" component={UserDescription} />
            <PrivateRoute path="/users" component={Users} />
            <Route exact path="*" component={Teams} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
