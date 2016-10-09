import React from 'react';
import { hashHistory } from 'react-router';

export default class NewDeck extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      author_id: this.props.currentUser.id,
      term_lang_id: "",
      def_lang_id: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLanguageInput = this.handleLanguageInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render(){
    let languageKeys = Object.keys(this.props.languages);
    let languages = languageKeys.map((key) => {
     return (
       <option value={key}>
         {this.props.languages[key].name}
       </option>);
    });

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

          <input type="submit" value="Create Set"/>

        </form>
      </div>
    );
  }


}
