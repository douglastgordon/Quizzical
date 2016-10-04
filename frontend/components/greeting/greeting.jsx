
import React from 'react';
import { Link } from 'react-router';

export default class GreetingComponent extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser){
      return(
        <div>
          <h1>Welcome back {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      return (
        <ul className="entryLinks">
          <li><Link to="/login" id='navLogin'>Login</Link></li>
          <li><Link to="/signup" id='navLogout'>Sign Up</Link></li>
        </ul>
      );
    }
  }
}
