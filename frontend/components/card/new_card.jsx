import React from 'react';

export default class NewCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      term: "",
      definition: "",
      deck_id: this.props.deck_id
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    if (e.target.className === "term"){
      this.setState({term: e.currentTarget.value});
    } else if (e.target.className === "definition"){
      this.setState({definition: e.currentTarget.value});
    }
  }

  render(){
    return(

      <div className="card-form">

        <input type='text'
          value={this.state.term}
          onInput={this.handleInput}
          className='term'/>

        <input type='text'
          value={this.state.definition}
          onInput={this.handleInput}
          className='definition'/>

      </div>

    );
  }
}
