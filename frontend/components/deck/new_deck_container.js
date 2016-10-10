import { connect } from 'react-redux';
import NewDeck from './new_deck';
import { createDeck, updateDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {

  let full_deck = {
    id: "",
    title: "",
    description: "",
    author_id: state.session.currentUser.id,
    term_lang_id: "",
    def_lang_id: "",
    term_language: "select",
    definition_language: "select"
  };
  let edit = false;
  if (ownProps.params.deckId){
    full_deck = state.full_deck;
    edit = true;
  }

  return ({
    currentUser: state.session.currentUser,
    languages: state.languages,
    full_deck,
    edit
  });
};

const mapDispatchToProps = dispatch => {
  return (
    {processForm: (deck) => dispatch(createDeck(deck)),
    updateForm: (deck) => dispatch(updateDeck(deck))}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
