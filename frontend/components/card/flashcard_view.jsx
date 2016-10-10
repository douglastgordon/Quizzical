import React from 'react';

export default class FlashcardView extends React.Component{

  constructor(props){
    super(props);

    this.cardKeys = Object.keys(this.props.full_deck.cards);
    this.cardKeys = this.cardKeys.map((key)=>{
      return (parseInt(key));
    });
    //remember to mod
  }

  render(){
    debugger
    return (
      <h1>{this.props.full_deck.cards[this.cardKeys[0]].term}</h1>
    );
  }


}
