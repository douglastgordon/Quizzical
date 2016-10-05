import React from 'react';

export default class loggedout extends React.Component{
  render(){
    return (
    <div className = "loggedOut group">
      <img src={window.Quizzical.images.learningtree} className="tree"></img>
      <div className="text">
        <h2>Learn <br/> Anything.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
  }
}
