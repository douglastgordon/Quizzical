import React from 'react';
import { hashHistory } from 'react-router';

export default class NewDeck extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      id: this.props.full_deck.id,
      title: this.props.full_deck.title,
      description: this.props.full_deck.description,
      author_id: this.props.full_deck.author_id,
      term_lang_id: this.props.full_deck.title.term_lang_id,
      def_lang_id: this.props.full_deck.title.def_lang_id
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLanguageInput = this.handleLanguageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInput(e){
    if (e.target.className === "title"){
      this.setState({title: e.currentTarget.value});
    } else if (e.target.className === "description"){
      this.setState({description: e.currentTarget.value});
    }
  }

  handleLanguageInput(e){
    if (e.target.className === "term-lang"){
      this.setState({term_lang_id: e.target.value});
    } else if (e.target.className === "def-lang"){
      this.setState({def_lang_id: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const deck = this.state;
    this.props.processForm(deck);
  }

  handleUpdate(e){
    e.preventDefault();
    const deck = this.state;
    this.props.updateForm(deck);
  }

  render(){
    let languageKeys = Object.keys(this.props.languages);
    let languages = languageKeys.map((key) => {
     return (
       <option value={key}>
         {this.props.languages[key].name}
       </option>);
    });

    let submitText;
    let formSubmitAction;
    if (this.props.edit){
      submitText = "Update Deck";
      formSubmitAction = this.handleUpdate;
    } else {
      submitText = "Create Deck";
      formSubmitAction = this.handleSubmit;
    }

    return (
      <div className='newDeckContainer'>
        <h1>Make a new set</h1>
        <form onSubmit={formSubmitAction}>

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

          <label>Term Language
            <select onChange={this.handleLanguageInput}
              value={this.state.term_lang_id}
              className="term-lang">
              <option value="select">Select Language</option>
              {languages}
            </select>
          </label>

          <label>Definition Language
            <select onChange={this.handleLanguageInput}
              value={this.state.def_lang_id}
              className="def-lang">
              <option value="select">Select Language</option>
              {languages}
            </select>
          </label>

          <input type="submit" value={submitText}/>

        </form>
      </div>
    );
  }


}
