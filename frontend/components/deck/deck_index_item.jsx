import React from 'react';

export default class DeckIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    debugger
    return (
      <li>
        <h1>{this.props.deck.title}</h1>
      </li>
    );
  }

}
