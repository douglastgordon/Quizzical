import React from 'react';
import DeckIndexItem from './deck_index_item';

export default class DeckIndex extends React.Component{

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    debugger
    this.props.requestDecks();
    this.props.requestLanguages();
  }

  render(){
    debugger
      let user;
      const deckKeys = Object.keys(this.props.decks);
      let decks = deckKeys.map((key) => {
        if ((this.props.user_id === "" && this.props.language_id === "") ||
            (this.props.user_id !== "" &&  this.props.user_id == this.props.decks[key].author_id) ||
            (this.props.language_id !== "" && this.props.language_id == this.props.decks[key].term_lang_id)){

          user = this.props.decks[key].author;
          return (
            <DeckIndexItem key={key} deck={this.props.decks[key]}/>
          );
        } else {
          return;
        }
      });

      let title;
      if (this.props.user_id===""){
        title = "All Decks";
      } else {
        title = `${user}'s Decks`;
      }


    return (
      <div className='content'>
        <div className='deck-index group'>
          <h1>{title}</h1>
          <ul className='deck-list'>
            {decks}
          </ul>
        </div>
    </div>
    );

  }
}
