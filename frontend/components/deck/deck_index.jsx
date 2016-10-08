import React from 'react';
import DeckIndexItem from './deck_index_item';

export default class DeckIndex extends React.Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestDecks();
    this.props.requestLanguages();
  }

  render(){
    const deckKeys = Object.keys(this.props.decks);
    const decks = deckKeys.map((key) => {
      return (
        <DeckIndexItem key={key} deck={this.props.decks[key]}/>
      );
    });

    return (
      <div className='content'>
        <div className='deck-index group'>
          <h1>All Decks</h1>
          <ul className='deck-list'>
            {decks}
          </ul>
        </div>
    </div>
    );

  }
}
