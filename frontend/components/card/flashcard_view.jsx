import React from 'react';

export default class FlashcardView extends React.Component{

  constructor(props){
    super(props);

    this.cardKeys = Object.keys(this.props.full_deck.cards);
    this.cardKeys = this.cardKeys.map((key)=>{
      return (parseInt(key));
    });
    this.state = {
      counter: 0,
      tOrD: "term"
    };
    //remember to mod
    this.flipCard = this.flipCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  flipCard(e){
    if (this.state.tOrD === "term"){
      this.setState({tOrD: "definition"});
    } else if (this.state.tOrD === "definition"){
      this.setState({tOrD: "term"});
    }
  }

  nextCard(e){
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

  componentDidMount(){
    window.addEventListener("keydown", this.nextCard);
  }

  render(){
      let tOrD = this.state.tOrD;
      let currentCardId = this.cardKeys[this.state.counter];
      let currentShow;
      if (tOrD === "term"){
        currentShow = this.props.full_deck.cards[currentCardId].term;
      } else if (tOrD === "definition"){
        currentShow = this.props.full_deck.cards[currentCardId].definition;
      }

      return (
        <div className="flip-card" onClick={this.flipCard} >
          <h1 className="card">
            {currentShow}
          </h1>
        </div>
      );
  }


}
