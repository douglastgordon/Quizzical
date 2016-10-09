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
      <div className="home">

        <header className="homeNav">
          <Link to="/home"><h1>Quizzical</h1></Link>
          <div className="lefticons">
            <div className="user">
              <img src={window.Quizzical.images.usericon}
                className="usericon">
              </img>

              <Link to={"/users/"+this.props.currentUser.id}>
                <h2>{this.props.currentUser.username}</h2>
              </Link>

            </div>
            <button onClick={this.handleClick}>Log Out</button>
          </div>
        </header>

        <div className="sidebar group">
          <div className="buttons">
            <Link to="/home" className="home-button button"><h1>Home</h1></Link>
            <Link to="/create" className="create-set button"><h1>Create Deck</h1></Link>
            <Link to={"/users/"+this.props.currentUser.id} className="my-sets button">
              <h1>My Decks</h1>
            </Link>
          </div>
        </div>

      </div>
    );
  }
  }
}
