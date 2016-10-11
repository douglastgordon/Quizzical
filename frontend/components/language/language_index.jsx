import React from 'react';


export default class LanguageIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let languageKeys = Object.keys(this.props.languages);
    let languages = languageKeys.map((key) => {
      return (
        <li>
          <div className="top-line">
            <h2>{this.props.languages[key].name}</h2>
          </div>
          <div className="right-side">
            <div className="deck-count">
              <h5>{this.props.languages[key].def_lang_count + " decks"}</h5>
            </div>
            <img src={window.Quizzical.images.enter} className="enter"></img>
          </div>
        </li>);
    });


    return(
      <div className='content'>
        <div className='language-index group'>
          <h1>Languages</h1>
          <ul className='language-list'>
            {languages}
          </ul>
        </div>
    </div>
    );
  }

}
