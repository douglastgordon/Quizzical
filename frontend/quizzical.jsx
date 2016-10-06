import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { login } from './actions/session_actions';

import { requestDecks } from './actions/deck_actions';
import { REQUEST_DECKS } from './actions/deck_actions';
window.store = configureStore();
window.login = login;

window.REQUEST_DECKS = REQUEST_DECKS;
window.requestDecks = requestDecks;




document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

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

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
