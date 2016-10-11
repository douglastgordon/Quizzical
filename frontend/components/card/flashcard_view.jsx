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
    this.something = (
      <h1 className="term">
        {this.props.full_deck.cards[this.cardKeys[this.state.counter]].term}
      </h1>
    );
  }

  flipCard(e){
    if (this.state.tOrD === "term"){
      this.setState({tOrD: "definition"});
    } else if (this.state.tOrD === "definition"){
      this.setState({tOrD: "term"});
    }
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
        <div onClick={this.flipCard} on>
          <h1 className="card">
            {currentShow}
          </h1>
        </div>
      );
  }


}
