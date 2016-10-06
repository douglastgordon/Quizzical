import React from 'react';
import DeckIndexItem from './deck_index_item';

export default class DeckIndex extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestDecks();
  }

  render(){
    const deckKeys = Object.keys(this.props.decks);
    const decks = deckKeys.map((key) => {
      return (
        <DeckIndexItem key={key} deck={this.props.decks[key]}/>
      );
    });

    return (
      <h1>All Decks</h1>
    );

  }
}
