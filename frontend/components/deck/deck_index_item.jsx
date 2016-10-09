import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

export default class DeckIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const deckID = this.props.deck.id;
    hashHistory.push(`/${deckID}`);
  }

  render(){
    return (
      <li>
        <h2 onClick={this.handleClick}>{this.props.deck.title}</h2>
        <Link to={"/users/"+this.props.deck.author_id}><h3>{this.props.deck.author}</h3></Link>
      </li>
    );
  }

}
