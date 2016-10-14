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
    this.playAudio = this.playAudio.bind(this);
    this.state = {
      forms: [],
      form_count: 0
    };
  }

  handleDestroy(){
    this.props.destroyDeck(this.props.deck.id);
  }

  componentWillMount(){
    this.props.requestFullDeck(this.props.params.deckId);
  }

  addNewCardForm(){
    this.setState({forms: this.state.forms.concat(<NewCardContainer id={this.state.form_count}/>)});
    this.setState({form_count: this.state.form_count+1});
  }


  handleCardDestroy(e){
    this.props.destroyCard(e.currentTarget.children[0].id);
    this.props.requestFullDeck(this.props.params.deckId);
  }

  playAudio(e){
    debugger
    e.currentTarget.children[1].play();
  }

  handleEnter(e){
      e.preventDefault();
      let formData = new FormData();
      let formKeys = Object.keys(this.props.card_forms);
      let deckId = this.props.deck.id;
      let cards = formKeys.map((key) => {
        let card_form = this.props.card_forms[key];

        formData.append(`cards[${key}][term]`, card_form.term );
        formData.append(`cards[${key}][definition]`, card_form.definition );

        if (card_form.audioFile !== null ){
          formData.append(`cards[${key}][audio]`, card_form.audioFile );
        }

        formData.append(`cards[${key}][deck_id]`, deckId );

      });

    this.props.createCards(formData);
    this.setState({forms: []});
  }

  render(){

    let forms;
    // rendering decks cards
    let kards;
    if (this.props.deck.cards){
      const cardKeys = Object.keys(this.props.deck.cards);
      kards = cardKeys.map((key, idx)=>{
        let deleteButton;
        if (this.props.currentUser.id === this.props.deck.author_id){
          deleteButton = (
            <div className="delete-card" onClick={this.handleCardDestroy}>

            <img id={key}
              src={window.Quizzical.images.delete}>
            </img>
          </div>

          );
        }
        let audio_image = window.Quizzical.images.play_audio;
        if (this.props.deck.cards[key].audio_url == '/audios/original/missing.png'){
            audio_image = window.Quizzical.images.no_audio;
        }

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
                  {deleteButton}
                <div className="audio" onClick={this.playAudio}>
                  <img src={audio_image}></img>
                  <audio>
                    <source src={this.props.deck.cards[key].audio_url} type="audio/wav"/>
                  </audio>
                </div>
              </div>
            </li>
        );
      });
    }



    let buttons = (
      <div className="buttons">
        <div className="button-container1">
          <Link to={"/study/"+this.props.deck.id}>
            <button className="study button">Study</button>
          </Link>
        </div>
      </div>
      );
    let addButton;

    if (this.props.deck.author_id === this.props.currentUser.id){

      buttons = (
        <div className="buttons">

          <div className="button-container0">
            <Link to={"/study/"+this.props.deck.id}>
              <button className="study button">Study</button>
            </Link>
          </div>

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
              <Link to={"/users/"+this.props.deck.author_id}>
                <h2>{this.props.deck.author}</h2>
              </Link>
            </div>
            {buttons}
          </div>

          <h3>Description</h3>
          <p>{this.props.deck.description}</p>

          <div className="titles group">
            <div className="term-title">
              <h3>Terms</h3>
              <Link to={"/languages/"+this.props.deck.term_lang_id}>
                <h4>{this.props.deck.term_language}</h4>
              </Link>
            </div>
            <div className="definition-title">
              <h3>Definitions</h3>
              <Link to={"/languages/"+this.props.deck.def_lang_id}>
                <h4>{this.props.deck.definition_language}</h4>
              </Link>
            </div>
          </div>

          <ul className="cards">
            {kards}
          </ul>

          <form className="new-card" onSubmit={this.handleEnter}>
              {this.state.forms}
              <button className="hidden" type="submit">Submit</button>
          </form>
          {addButton}

        </div>
      </div>
    );
  }
}
