import React from 'react';
import DeckIndexItem from './deck_index_item';

export default class DeckIndex extends React.Component{

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      searchQuery: ""
    };
  }

  componentWillMount(){
    this.props.requestDecks();
    this.props.requestLanguages();
  }

  handleSearch(e){
    this.setState({searchQuery: e.currentTarget.value });
  }

  render(){
      let user;
      const deckKeys = Object.keys(this.props.decks);
      let filter = new RegExp(this.state.searchQuery);
      let count = 0;
      let decks = deckKeys.map((key) => {
        if (((this.props.user_id === "" && this.props.language_id === "") ||
            (this.props.user_id !== "" &&  this.props.user_id == this.props.decks[key].author_id) ||
            (this.props.language_id !== "" && this.props.language_id == this.props.decks[key].term_lang_id)) &&
            ((filter.test(this.props.decks[key].title)) ||
            (filter.test(this.props.decks[key].author)) ||
            (filter.test(this.props.decks[key].term_language)))){

          user = this.props.decks[key].author;
          count++;
          return (
            <DeckIndexItem key={key} deck={this.props.decks[key]}/>
          );
        } else {
          return;
        }
      });

      decks = decks.reverse();
      console.log(this.props.language_id);
      let title;
      if (this.props.user_id=== "" && this.props.language_id === ""){
        title = "All Decks";
      } else if (this.props.user_id !== ""){
        title = `${user}'s Decks`;
      } else if (this.props.language_id !== ""){
        title = `${this.props.languages[this.props.language_id].name} decks`;
      }

      let nothingHere;
      if (count=== 0){
        nothingHere = "Sorry, there's nothing here!";
      }
    return (
      <div className='content'>
        <div className='deck-index group'>
          <div className="search-field">
            <img className="search" src={window.Quizzical.images.search}></img>
            <input type="text"
              onInput={this.handleSearch}
              value={this.state.searchQuery}>
            </input>
          </div>
          <h1>{title}</h1>
          <ul className='deck-list'>
            {decks}
          </ul>
          <br/>
          <h2>{nothingHere}</h2>
        </div>
    </div>
    );

  }
}
