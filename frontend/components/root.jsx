import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SessionFormContainer from './session_forms/session_form_container';
import LoggedOut from './logged_out/logged_out';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    debugger
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirect = (nextState, replace) => {
    replace('/welcome');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route onEnter={_redirect}/>

        <Route path="/welcome" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
        </Route>

      </Router>

    </Provider>
  );
};

export default Root;
// <IndexRoute component={SearchContainer} />
