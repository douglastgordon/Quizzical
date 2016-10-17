import React from 'react';
import { Link } from 'react-router';

export default class FlashcardView extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      tOrD: "term"
    };
    this.flipCard = this.flipCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  flipCard(e){
    let classList = e.currentTarget.classList;
    classList.contains("flipped") === true ? classList.remove("flipped") : classList.add("flipped");

    if (this.state.tOrD === "term"){
      this.setState({tOrD: "definition"});
    } else if (this.state.tOrD === "definition"){
      this.setState({tOrD: "term"});
    }
  }

  changeCard(e){
    let newCounter;
    if (e.keyCode === 39){
      newCounter = ((this.state.counter+1)%this.cardKeys.length);
      this.setState({counter: newCounter});
    } else if (e.keyCode === 37){
      newCounter = (this.state.counter-1);
      if (newCounter < 0){
        newCounter = this.cardKeys.length - 1;
      }
      this.setState({counter: newCounter});
    }
  }

  nextCard(e){
    let newCounter = ((this.state.counter+1)%this.cardKeys.length);
    this.setState({counter: newCounter});
  }

  prevCard(e){
    let newCounter = (this.state.counter-1);
    if (newCounter < 0){
      newCounter = this.cardKeys.length - 1;
    }
    this.setState({counter: newCounter});
  }

  componentDidMount(){
    this.props.requestFullDeck(this.props.deck_id);
    window.addEventListener("keydown", this.changeCard);
  }

  playAudio(e){
    e.stopPropagation();
    e.currentTarget.children[1].play();
  }


  render(){


    if (!this.props.full_deck.cards){
      return (<div></div>);
    }

    this.cardKeys = Object.keys(this.props.full_deck.cards);
    this.cardKeys = this.cardKeys.map((key)=>{
      return (parseInt(key));
    });

    let tOrD = this.state.tOrD;
    let currentCardId = this.cardKeys[this.state.counter];
    let currentShow;
    if (tOrD === "term"){
      currentShow = this.props.full_deck.cards[currentCardId].term;
    } else if (tOrD === "definition"){
      currentShow = this.props.full_deck.cards[currentCardId].definition;
    }

    let nextButton = (
      <button className="card-button right" onClick={this.nextCard}>
        <img src={window.Quizzical.images.enter}></img>
      </button>
    );

    let prevButton = (
      <button className="card-button left" onClick={this.prevCard}>
          <img src={window.Quizzical.images.enter}></img>
      </button>
    );


    let audioButton;
    if (this.props.full_deck.cards[currentCardId].audio_url !== '/audios/original/missing.png'){
      audioButton = (
        <div onClick={this.playAudio} className="audio-play">
          <img src={window.Quizzical.images.black_play_audio} ></img>
          <audio key={currentCardId}>
            <source src={this.props.full_deck.cards[currentCardId].audio_url} type="audio/wav"/>
          </audio>
        </div>
      );
    }

    return (
      <div className="content">
        <div className="deck-show group">

          <div className="topline group">
            <div className="title">
              <h1>{this.props.full_deck.title}</h1>
              <Link to={"/users/"+this.props.full_deck.author_id}>
                <h2>{this.props.full_deck.author}</h2>
              </Link>
            </div>
            <div className="buttons">
              <div className="button-container1">
                <Link to={"/"+this.props.full_deck.id}>
                  <button className="back button">Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="flip-container">

          <div className="flip-card" onClick={this.flipCard}>

            <div className="card-front">
              {prevButton}
                {nextButton}

              <h1 className="card">
                {currentShow}
              </h1>
              {audioButton}
            </div>

            <div className="card-back">
              {prevButton}
              {nextButton}
              <h1 className="card">
                {currentShow}
              </h1>

            </div>


          </div>

          <h2>
            {(this.state.counter+1) + " of " + this.cardKeys.length}
          </h2>
        </div>
      </div>
    );
  }


}
