import React from 'react';
import { Link } from 'react-router';

export default class FlashcardView extends React.Component{

  constructor(props){
    super(props);

    this.cardKeys = Object.keys(this.props.full_deck.cards);
    this.cardKeys = this.cardKeys.map((key)=>{
      return (parseInt(key));
    });
    this.state = {
      counter: 0,
      tOrD: "term"
    };
    this.flipCard = this.flipCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  flipCard(e){
    let classList = e.currentTarget.classList;
    classList.contains("flipped") === true ? classList.remove("flipped") : classList.add("flipped");

    if (this.state.tOrD === "term"){
      this.setState({tOrD: "definition"});
    } else if (this.state.tOrD === "definition"){
      this.setState({tOrD: "term"});
    }
  }

  nextCard(e){
    let newCounter;
    if (e.keyCode === 39){
      newCounter = ((this.state.counter+1)%this.cardKeys.length);
      this.setState({counter: newCounter});
    } else if (e.keyCode === 37){
      newCounter = (this.state.counter-1);
      if (newCounter < 0){
        newCounter = this.cardKeys.length - 1;
      }
      this.setState({counter: newCounter});
    }
  }

  componentDidMount(){
    window.addEventListener("keydown", this.nextCard);
  }

  render(){
      let tOrD = this.state.tOrD;
      let currentCardId = this.cardKeys[this.state.counter];
      let currentShow;
      if (tOrD === "term"){
        currentShow = this.props.full_deck.cards[currentCardId].term;
      } else if (tOrD === "definition"){
        currentShow = this.props.full_deck.cards[currentCardId].definition;
      }

      return (
        <div className="content">
          <div className="deck-show group">

            <div className="topline group">
              <div className="title">
                <h1>{this.props.full_deck.title}</h1>
                <h2>{this.props.full_deck.author}</h2>
              </div>
              <div className="buttons">
                <div className="button-container1">
                  <Link to={"/"+this.props.full_deck.id}>
                    <button className="back button">Back</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flip-container">
            <div className="flip-card" onClick={this.flipCard}>
              <div className="card-front"  >
                <h1 className="card">
                  {currentShow}
                </h1>
              </div>
              <div className="card-back">
                <h1 className="card">
                  {currentShow}
                </h1>
              </div>
            </div>
            <h2>
              {(this.state.counter+1) + " of " + this.cardKeys.length}
            </h2>
          </div>
        </div>
      );
  }


}
