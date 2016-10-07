import React from 'react';
import { hashHistory } from 'react-router';

export default class DeckShow extends React.Component{

  constructor(props){
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDestroy(){
    this.props.destroyDeck(this.props.deck.id);
  }

  handleUpdate(){
    hashHistory.push(`${this.props.deck.id}/edit`);
  }

  render(){
    debugger
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
        </div>
      </div>
    );
  }

}
