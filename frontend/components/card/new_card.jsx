import React from 'react';

export default class NewCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      term: "",
      definition: "",
      deck_id: this.props.deck_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    if (e.target.className === "term"){
      this.setState({term: e.currentTarget.value});
    } else if (e.target.className === "definition"){
      this.setState({definition: e.currentTarget.value});
    }
  }

  handleSubmit(e){
    this.setState({deck_id: this.props.deck_id});
    e.preventDefault();
    const card = this.state;
    this.props.processForm(card);
    this.state.term = "";
    this.state.definition = "";
  }



  render(){
    return(

        <form onSubmit={this.handleSubmit} ref="form">
          <input type='text' value={this.state.term} onInput={this.handleInput} className='term'/>
          <input type='text' value={this.state.definition} onInput={this.handleInput} className='definition'/>
          <button type='submit'>Submit</button>
        </form>

    );
  }
}
// <form onSubmit={this.handleSubmit} ref="form" >
  // </form>
