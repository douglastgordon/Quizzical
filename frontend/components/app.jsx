import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import LoggedOut from './logged_out/logged_out';

const App = ({children}) => (
  <div className="group">
    <header className="navBar group">
      <Link to="/" className="header-link"><h1>Quizzical</h1></Link>
      <GreetingContainer/>
    </header>
    <LoggedOut/>
    {children}
  </div>
);

export default App;
