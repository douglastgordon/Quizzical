import React from 'react';
import { Link } from 'react-router';


export default class Play extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      randomNumber: 1,
      current_answer: "",
      current_score: 0,
      time_left: 60.00
    };

    this.randomTerm = this.randomTerm.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }



  componentDidMount(){
    this.props.requestFullDeck(this.props.deck_id);
  }

  startTimer(){
    this.interval = setInterval(this.tick, 10);
  }

  tick(){
    this.setState({time_left: this.state.time_left-0.01});
    if (this.state.time_left <= 0){
      clearInterval(this.interval);
    }
  }

  checkAnswer(e){
    this.setState({answer: e.currentTarget.value});
    if (e.currentTarget.value === this.props.full_deck.cards[this.state.randomNumber].definition){
      this.randomTerm();
    } else {
      this.setState({answer: e.currentTarget.value});
    }
  }

  randomTerm(){

    let numberOfCards = Object.keys(this.props.full_deck.cards).length;
    let randomNumber = Math.floor((Math.random() * numberOfCards)+1);
    let current_answer = this.props.full_deck.cards[randomNumber].definition;

    this.setState({
        randomNumber: randomNumber,
        answer: "",
        current_score: this.state.current_score+1
      });

  }

  render(){

    if (!this.props.full_deck.cards){
      return (<div></div>);
    }
      return (
        <div>

          <h3 onClick={this.randomTerm}>
            {this.props.full_deck.cards[this.state.randomNumber].term}
          </h3>
          <input onInput={this.checkAnswer} type="text" value={this.state.answer}/>
          <h3>Current Score: {this.state.current_score}</h3>
          <h3>{(this.state.time_left).toPrecision(4)}</h3>
          <h3 onClick={this.startTimer}>start</h3>
        </div>
      );
    }
  }
