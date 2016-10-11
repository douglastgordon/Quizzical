import React from 'react';
import { Provider } from 'react-redux';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import Welcome from './welcome';
import SessionFormContainer from './session_forms/session_form_container';
import Frontpage from './frontpage';

import NewDeckContainer from './deck/new_deck_container';
import DeckShowContainer from './deck/deck_show_container';
import DeckIndexContainer from './deck/deck_index_container';
import Flashcard from './card/flashcard_view_container';
import Languages from './language/language_index_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const _redirect = (nextState, replace) => {
    replace('home/index');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={Welcome} onEnter={_redirectIfLoggedIn}>
          <Route path="login" component={SessionFormContainer}/>
          <Route path="signup" component={SessionFormContainer}/>
        </Route>

        <Route path="/home" component={Frontpage}  >
          <IndexRoute component={DeckIndexContainer}/>
          <Route path="/users/:id" component={DeckIndexContainer}/>
          <Route path="/create" component={NewDeckContainer}/>
          <Route path="/languages" component={Languages}/>
          <Route path="/languages/:id" component={DeckIndexContainer}/>
          <Route path="/study/:deckId" component={Flashcard}/>
          <Route path="/edit/:deckId" component={NewDeckContainer}/>
          <Route path="/:deckId" component={DeckShowContainer}/>

        </Route>

      </Router>

    </Provider>
  );
};

export default Root;
