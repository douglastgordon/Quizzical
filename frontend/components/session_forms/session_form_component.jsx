import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class SessionFormComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
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
      hashHistory.push("/");
    }
  }

  render(){
    const isLogin = (this.props.formType === 'login');
    const header = (isLogin) ? "Log In" : "Sign Up";
    const link = (isLogin) ? "/signup" : "/login";
    const linkName = (isLogin) ? "Don't have an account?" : "Already a user?";



    return (
      <div>
        <div className="greyout"></div>
        <div className='entryForm'>
          <header group>
            {header}
            <Link to="/welcome" className="exitlink">
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

            <button type="submit">{header}</button>
            <Link className="link" to={link}>{linkName}</Link>
          </form>

        </div>
      </div>
    );


    }
  }
