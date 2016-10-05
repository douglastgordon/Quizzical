import React from 'react';
import { hashHistory, Link } from 'react-router';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.logout();
    // hashHistory.push("/");
  }

  componentWillUpdate(nextProps){

    if (!nextProps.currentUser){
      hashHistory.push("/");
    }
  }



  render(){
    if (!this.props.currentUser){
      return (
        <div></div>
      )
    } else {
    return(
        <div>
          <h1>Welcome back {this.props.currentUser.username}</h1>
          <button onClick={this.handleClick}>
            Log out
          </button>
        </div>
    )
  }
  }
}
