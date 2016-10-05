import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import Welcome from './welcome';
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
    // if (currentUser) {
    //   replace('/');
    // }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={Welcome} onEnter={_redirectIfLoggedIn}>
          <Route path="login" component={SessionFormContainer}/>
          <Route path="signup" component={SessionFormContainer}/>
        </Route>

        <Route path="/home"></Route>

      </Router>

    </Provider>
  );
};

export default Root;
// <IndexRoute component={SearchContainer} />
