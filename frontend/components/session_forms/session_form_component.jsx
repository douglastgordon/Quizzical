import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionFormComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
    this.receiveErrors();
  }

  handleInput(e){
    if (e.target.className === "username"){
      this.setState({username: e.currentTarget.value});
    } else if (e.target.className === "password"){
      this.setState({password: e.currentTarget.value});
    }
  }
  componentDidUpdate(){
    if (this.props.loggedIn){
      hashHistory.push("/home");
    }
  }
  receiveErrors(){
    this.setState({errors: this.props.errors});
  }

  guestLogin(e){
    e.preventDefault();
    hashHistory.push("/login");
    this.setState({username: "Guest", password: "password"});
  }



  render(){
    const isLogin = (this.props.formType === 'login');
    const header = (isLogin) ? "Log In" : "Sign Up";
    const link = (isLogin) ? "/signup" : "/login";
    const linkName = (isLogin) ? "Don't have an account?" : "Already a user?";

    return (
      <div className="loginPage">
        <div className="greyout"></div>
        <div className='entryForm'>
          <header>
            {header}
            <Link to="/" className="exitlink">
              <img src={window.Quizzical.images.exit} className="exit"></img>
            </Link>
          </header>

          <form onSubmit={this.handleSubmit} className="group">

            <label>
              <input type="text"
                className="username"
                value={this.state.username}
                onInput={this.handleInput}/>
              Username
            </label>

            <label>
              <input type="password"
                className="password"
                value={this.state.password}
                onInput={this.handleInput}/>
              Password
            </label>



            <h5 onClick={this.guestLogin}>Guest Login</h5>

            <h3>{this.state.errors}</h3>
            <button type="submit">{header}</button>
            <Link className="link" to={link}>{linkName}</Link>
          </form>

        </div>
      </div>
    );


    }
  }
