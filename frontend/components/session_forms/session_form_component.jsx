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
    const linkName = (isLogin) ? "Sign Up" : "Log In";



    return (
      <div className='entryForm'>
        <header>{header}</header>
        <form onSubmit={this.handleSubmit}>

          <label>Username
            <input type="text"
              className="username"
              value={this.state.username}
              onInput={this.handleInput}/>
          </label>

          <label>Password
            <input type="password"
              className="password"
              value={this.state.password}
              onInput={this.handleInput}/>
          </label>
          <button type="submit">Submit</button>

        </form>
        <Link to={link}>{linkName}</Link>
      </div>
    );


    }
  }
