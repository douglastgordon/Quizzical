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
      term_lang_id: this.props.full_deck.term_lang_id,
      def_lang_id: this.props.full_deck.def_lang_id,
      term_language: this.props.full_deck.term_language,
      definition_language: this.props.full_deck.definition_language
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLanguageInput = this.handleLanguageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.doNothing = this.doNothing.bind(this);
  }

  handleInput(e){
    if (e.target.className === "title"){
      this.setState({title: e.currentTarget.value});
    } else if (e.target.className === "description"){
      this.setState({description: e.currentTarget.value});
    }
  }

  handleLanguageInput(e){
    if (e.target.parentElement.className === "term-lang"){
      this.setState({
        term_lang_id: e.target.value,
        term_language: e.target.id
      });
    } else if (e.target.parentElement.className === "def-lang"){
      this.setState({
        def_lang_id: e.target.value,
        definition_language: e.target.id
      });
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

  doNothing(){}

  render(){
    let languageKeys = Object.keys(this.props.languages);
    let languages = languageKeys.map((key) => {
     return (
       <li value={key}
           id={this.props.languages[key].name}
           onClick={this.handleLanguageInput}>
         {this.props.languages[key].name}
       </li>);
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

    let submitButton;
    if (this.state.term_language !== "select" &&
        this.state.definition_language !== "select" &&
        this.state.title !== ""){
      submitButton = (
        <div className="submit-container">
          <input className="submit" type="submit" value={submitText}/>
        </div>
      );
    } else {
      formSubmitAction = this.doNothing;
      submitButton = (
        <div className="submit-container" >
          <input className="submit-grey" type="submit" value={submitText}/>
          <h5>please fill out all required fields</h5>
        </div>
      );
    }


    return (
      <div className="content">
        <div className='new-deck-container'>
          <h1>{submitText}</h1>
          <form onSubmit={formSubmitAction}>

            <div className="dropdowns">

              <div className="term-block">
                <h3>Term Language</h3>
                <div className="list-container group">
                  <h4>{this.state.term_language}</h4>
                  <ul value={this.state.term_lang_id}
                      className="term-lang">
                    {languages}
                  </ul>
                </div>
              </div>


              <div className="definition-block">
                <h3>Definition Language</h3>
                <div className="list-container group">
                  <h4>{this.state.definition_language}</h4>
                  <ul value={this.state.def_lang_id}
                      className="def-lang">
                      {languages}
                  </ul>
                </div>
              </div>

            </div>

            <div className="words">
              <h3>Title</h3>
              <input type='text'
                value={this.state.title}
                onInput={this.handleInput}
                className='title'/>


              <h3>Description</h3>
              <input type='textarea'
                value={this.state.description}
                onInput={this.handleInput}
                className='description'/>
            </div>

          {submitButton}

          </form>
        </div>
      </div>
    );
  }


}
