
import React from 'react';
import { Link } from 'react-router';

export default class GreetingComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className="entryLinks">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" id='navSignup'>Sign Up</Link></li>
      </ul>
    );
  }
}
