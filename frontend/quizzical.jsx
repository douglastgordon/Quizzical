import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';


//testing
// import { login } from './actions/session_actions';
// import { requestDeck } from './actions/deck_actions';
// import { REQUEST_DECK } from './actions/deck_actions';
// import { fetchDeck } from './util/deck_api_util';
// window.store = configureStore();
// window.login = login;
// window.fetchDeck = fetchDeck;
// window.REQUEST_DECK = REQUEST_DECK;
// window.requestDeck = requestDeck;
//



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const initialState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
