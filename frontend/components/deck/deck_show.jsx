import React from 'react';
import { hashHistory } from 'react-router';

export default class DeckShow extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.destroyDeck(this.props.deckId);
    hashHistory.push(`/home`);
  }

  render(){
    return (
      <div>
        <h1>{this.props.deck.title}</h1>
        <p>{this.props.deck.description}</p>
        <button onClick={this.handleClick}>Destroy</button>
      </div>
    );
  }

}
