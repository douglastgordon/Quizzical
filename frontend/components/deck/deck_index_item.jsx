import React from 'react';
import { hashHistory } from 'react-router';

export default class DeckIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    const deckID = this.props.deck.id;
    hashHistory.push("home/" + deckID);
  }

  render(){
    return (
      <li>
        <h1 onClick={this.handleClick}>{this.props.deck.title}</h1>
      </li>
    );
  }

}
