import React from 'react';
import { hashHistory } from 'react-router';
import NewCardContainer from '../card/new_card_container';

export default class DeckShow extends React.Component{

  constructor(props){
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addNewCardForm = this.addNewCardForm.bind(this);
    this.forms = [];
  }

  handleDestroy(){
    this.props.destroyDeck(this.props.deck.id);
  }

  handleUpdate(){
    hashHistory.push(`${this.props.deck.id}/edit`);
  }

  componentWillMount(){
    this.props.requestFullDeck(this.props.params.deckId);
  }

  addNewCardForm(){
    this.forms.push(<NewCardContainer/>);
    this.forceUpdate();
  }

  render(){

    console.log(this.props.deck.cards)
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
              <span className="definition">{this.props.deck.cards[key].definition}</span>
            </div>
          </li>
        );
      });
    }
    let forms;

    return (
      <div className="content">

        <div className="deck-show group">

          <div className="topline group">
            <div className="title">
              <h1>{this.props.deck.title}</h1>
              <h2>{this.props.deck.author}</h2>
            </div>
            <div className="buttons">
              <div className="button-container1">
                <button onClick={this.handleDestroy} className="delete button">Delete</button>
              </div>
              <div className="button-container2">
                <button onClick={this.handleUpdate} className="edit button">Edit</button>
              </div>
            </div>
          </div>

          <h3>Description</h3>
          <p>{this.props.deck.description}</p>

          <div className="titles">
            <span className="terms">Terms</span>
            <span className="definitions">Definitions</span>
          </div>

          <ul className="cards">
            {kards}
          </ul>


          <div>
            {this.forms}
          </div>
          <button onClick={this.addNewCardForm}>Add Card</button>

        </div>
      </div>
    );
  }

}
// <span className="number">{idx+1}</span>
