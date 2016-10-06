import React from 'react';

export default class NewDeck extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    if (e.target.className === "title"){
      this.setState({title: e.currentTarget.value});
    } else if (e.target.className === "description"){
      this.setState({description: e.currentTarget.value});
    }
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    const deck = this.state;
    this.props.processForm(deck);
  }

  render(){
    return (
      <div className='newDeckContainer'>
        <h1>Make a new set</h1>
        <form onSubmit={this.handleSubmit}>

          <label>Title
            <input type='text'
              value={this.state.title}
              onInput={this.handleInput}
              className='title'/>
          </label>

          <label>Description
            <input type='textarea'
              value={this.state.description}
              onInput={this.handleInput}
              className='description'/>
          </label>

          <input type="submit" value="Create Set"/>

        </form>
      </div>
    );
  }


}
