#Quizzical

Quizzical is a web application for creating and studying flashcards. It was
 inspired by Quizlet and built using Ruby on Rails and React/Redux.

Explore and Listen at [quizzical.co](http://www.quizzical.co/)

###Welcome View:

![welcome]

###Home View:

![home]

###Flashcard View:

![flashcard]

###Technical Details:
* Quizzical allows users to dynamically create unlimited forms with optional audio-upload for card creation. This improves scalability by limiting the number of potential ajax requests. This was accomplished by appending all the information contained in the forms to a single formData object, as shown below.

```javascript

handleEnter(e){
    e.preventDefault();
    let formData = new FormData();
    let formKeys = Object.keys(this.props.card_forms);
    let deckId = this.props.deck.id;
    let cards = formKeys.map((key) => {
      let card_form = this.props.card_forms[key];

      formData.append(`cards[${key}][term]`, card_form.term );
      formData.append(`cards[${key}][definition]`, card_form.definition );

      if (card_form.audioFile !== null ){
        formData.append(`cards[${key}][audio]`, card_form.audioFile );
      }
      formData.append(`cards[${key}][deck_id]`, deckId );
    });
  this.props.createCards(formData);
  this.setState({forms: []});
}
```


###Features
* Authentication
* CRUD for decks and flashcards
* Audio upload and playback
* Search Decks
* Filter Decks by language or author
* Animated flashcard view
* Interactive learning game which saves high scores



[Original Design Docs](./docs/README.md)

[welcome]: ./docs/images/welcome.png
[home]: ./docs/images/home.png
[flashcard]: ./docs/images/flashcard.png
