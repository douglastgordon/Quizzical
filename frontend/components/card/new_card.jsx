import React from 'react';

export default class NewCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      temp_id: this.props.temp_id,
      term: "",
      definition: "",
      deck_id: this.props.deck_id,
      audioFile: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    this.props.addCard(this.state.temp_id);
  }

  componentDidUpdate(){
    this.props.updateCard(this.state);
  }

  handleInput(e){
    if (e.target.className === "term"){
      this.setState({term: e.currentTarget.value});
    } else if (e.target.className === "definition"){
      this.setState({definition: e.currentTarget.value});
    }
  }

  updateFile(e){
    let file = e.currentTarget.files[0];

    this.setState({audioFile: file});
  }

  render(){
    let audioImage = window.Quizzical.images.audio_upload;
    if (this.state.audioFile !== null){
      audioImage = window.Quizzical.images.check;
    }

    return(
      <div className="card-form">
        <div className="text-entries">

          <div className="term-box">
            <input type='text'
              value={this.state.term}
              onInput={this.handleInput}
              className="term"/>
          </div>
          <div className="definition-box">
            <input type='text'
              value={this.state.definition}
              onInput={this.handleInput}
              className='definition'/>
          </div>

        </div>
        <div className="audio-upload">
          <img src={audioImage}></img>
          <input type="file" className="upload-button" onChange={this.updateFile}/>
        </div>
      </div>
    );
  }
}
