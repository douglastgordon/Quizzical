import React from 'react';

export default class loggedout extends React.Component{
  render(){
    return (
    <div className = "loggedOut group">
      <img src={window.Quizzical.images.learningtree} className="tree"></img>
      <div className="text">
        <h2>Speak <br/> Your Mind.</h2>
        <p>Learn any language.</p>
      </div>
    </div>
  );
  }
}
