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
      );
    } else {
    return(

      <header className="homeNav">
        <Link to="/home" className="header-link"><h1>Quizzical</h1></Link>
        <div className="lefticons">
          <div className="user">
            <img src={window.Quizzical.images.usericon}
              className="usericon">
            </img>
            <h2>{this.props.currentUser.username}</h2>
          </div>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      </header>
    );
  }
  }
}
