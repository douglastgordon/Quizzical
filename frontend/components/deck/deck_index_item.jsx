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
        <div className="top-line group">
          <h2 onClick={this.handleClick}>{this.props.deck.title}</h2>
          <h4>{this.props.deck.term_language+" > "+this.props.deck.definition_language}</h4>
        </div>
        <Link to={"/users/"+this.props.deck.author_id}><h3>{this.props.deck.author}</h3></Link>
      </li>
    );
  }

}
