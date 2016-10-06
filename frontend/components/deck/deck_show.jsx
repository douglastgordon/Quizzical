import React from 'react';

export default class DeckShow extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <h1>{this.props.deck.title}</h1>
        <p>{this.props.deck.description}</p>
      </div>
    );
  }

}
