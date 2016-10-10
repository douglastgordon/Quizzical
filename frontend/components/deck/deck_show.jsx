import React from 'react';
import { Link, hashHistory } from 'react-router';
import NewCardContainer from '../card/new_card_container';

export default class DeckShow extends React.Component{

  constructor(props){
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.addNewCardForm = this.addNewCardForm.bind(this);
    this.handleCardDestroy = this.handleCardDestroy.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.forms = [];
  }

  handleDestroy(){
    this.props.destroyDeck(this.props.deck.id);
  }

  componentWillMount(){
    this.props.requestFullDeck(this.props.params.deckId);
  }

  addNewCardForm(){
    this.forms.push(<NewCardContainer/>);
    this.forceUpdate();
  }


  handleCardDestroy(e){
    this.props.destroyCard(e.currentTarget.id);
    this.forceUpdate();
  }

  handleEnter(e){

    let forms = e.currentTarget.children;
    let cards = [];
    for (var i = 0; i < forms.length-1; i++) {
      cards.push({term: forms[i].children[0].children[0].value,
       definition: forms[i].children[1].children[0].value,
       deck_id: this.props.deck.id
     });
    }
    this.props.createCards(cards);
    this.forms = [];
  }

  render(){

    let forms;
    // rendering decks cards
    let kards;
    if (this.props.deck.cards){
      const cardKeys = Object.keys(this.props.deck.cards);
      kards = cardKeys.map((key, idx)=>{
        return (
            <li className="card">
              <div className="terms">
                <span className="term">{this.props.deck.cards[key].term}</span>
              </div>

              <div className="definitions">
                <span className="definition">
                  {this.props.deck.cards[key].definition}
                </span>
              </div>
              <div className="right-buttons">
                <img id={key}
                  onClick={this.handleCardDestroy}
                  src={window.Quizzical.images.delete}>
                </img>
              </div>
            </li>
        );
      });
    }

    let buttons;
    let addButton;
    if (this.props.deck.author_id === this.props.currentUser.id){

      buttons = (
        <div className="buttons">
          <div className="button-container1">
            <button onClick={this.handleDestroy} className="delete button">
              Delete
            </button>
          </div>
          <div className="button-container2">
            <Link to={"/edit/"+this.props.deck.id}>
              <button className="edit button">Edit</button>
            </Link>
          </div>
        </div>
      );

      addButton = (
        <button className="add-card" onClick={this.addNewCardForm}>
          <img src={window.Quizzical.images.add} className="add"></img>
        </button>
      );

    }



    return (
      <div className="content">

        <div className="deck-show group">

          <div className="topline group">
            <div className="title">
              <h1>{this.props.deck.title}</h1>
              <h2>{this.props.deck.author}</h2>
            </div>
            {buttons}
          </div>

          <h3>Description</h3>
          <p>{this.props.deck.description}</p>

          <div className="titles group">
            <div className="term-title">
              <h3>Terms</h3>
              <h4>{this.props.deck.term_language}</h4>
            </div>
            <div className="definition-title">
              <h3>Definitions</h3>
              <h4>{this.props.deck.definition_language}</h4>
            </div>
          </div>

          <ul className="cards">
            {kards}
          </ul>

          <form className="new-card" onSubmit={this.handleEnter}>
              {this.forms}
              <button className="hidden" type="submit">Submit</button>
          </form>
          {addButton}

        </div>
      </div>
    );
  }

}
// <span className="number">{idx+1}</span>
// <form onSubmit={this.submitAllCards}>
// <button type='submit'>Real Submit</button>
