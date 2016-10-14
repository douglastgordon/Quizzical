import React from 'react';
import { Link } from 'react-router';


export default class Play extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      randomNumber: 0,
      current_answer: "",
      current_score: 0,
      time_left: 7.00,
      running: false
    };

    this.randomTerm = this.randomTerm.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.props.requestFullDeck(this.props.deck_id);
    this.props.requestHighScore(this.props.deck_id);
  }

  startTimer(){
    this.interval = setInterval(this.tick, 10);
    this.randomTerm();
    this.setState({running: true});
  }

  tick(){
    this.setState({time_left: this.state.time_left-0.01});
    if (this.state.time_left <= 0){
      clearInterval(this.interval);
      if (this.state.current_score > this.props.hi_score ){
        this.props.createScore({
          score: this.state.current_score,
          deck_id: this.props.deck_id,
          user_id: this.props.currentUser.id
        });
        this.props.requestHighScore(this.props.deck_id);
      }
      this.setState({
        time_left: 15.00,
        randomNumber: 0,
        running: false,
        current_score: 0
      });

    }
  }

  checkAnswer(e){
    this.setState({answer: e.currentTarget.value});
    if (e.currentTarget.value === this.props.full_deck.cards[this.state.randomNumber].definition){
      this.randomTerm();
      this.setState({current_score: this.state.current_score+1});
    } else {
      this.setState({answer: e.currentTarget.value});
    }
  }

  randomTerm(){

    let numberOfCards = Object.keys(this.props.full_deck.cards).length;
    let randomNumber = Math.floor((Math.random() * numberOfCards)+(Object.keys(this.props.full_deck.cards)[0]));
    console.log("look at me")
    console.log(this.props.full_deck);
    console.log(this.props.full_deck.cards);
    console.log(this.props.full_deck.cards[randomNumber]);
    console.log(this.props.full_deck.cards[randomNumber].definition);


    let current_answer = this.props.full_deck.cards[randomNumber].definition;

    this.setState({
        randomNumber: randomNumber,
        answer: ""

      });

  }

  render(){

    if (!this.props.full_deck.cards){
      return (<div></div>);
    }
    let term;
    if (this.state.randomNumber === 0){
      term = "";
    } else {
      term = this.props.full_deck.cards[this.state.randomNumber].term;
    }

    let start = "start";
    if (this.state.running === true){
      start = "";
    }

      return (
        <div className="content">
          <div className="play">
          <h1>{  parseFloat(Math.round((this.state.time_left) * 100) / 100).toFixed(2)}</h1>
            <h3 onClick={this.randomTerm}>
              {term}
            </h3>
          <h2 onClick={this.startTimer}>{start}</h2>


          <input onInput={this.checkAnswer} type="text" value={this.state.answer}/>
          <h4>High Score: {this.props.hi_score} {this.props.hi_scorer}</h4>
          <h4>Current Score: {this.state.current_score}</h4>
          </div>
        </div>
      );
    }
  }
