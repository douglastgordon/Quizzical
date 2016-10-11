import React from 'react';

export default class LanguageIndex extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    let languageKeys = Object.keys(this.props.languages);
    let languages = languageKeys.map((key) => {
      return (<li>{this.props.languages[key].name}</li>);
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
