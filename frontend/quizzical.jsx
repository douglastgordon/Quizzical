import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions.js';

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
    window.store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Quizzical</h1>, root);
});
