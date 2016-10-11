import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { requestDecks, requestDeck } from '../../actions/deck_actions';
import { requestLanguages } from '../../actions/language_actions';

const mapStateToProps = (state, ownProps) => {
  let languageId="";
  let userId="";

  if (ownProps.location.pathname.slice(1, 10) === "languages"){
    languageId = ownProps.location.pathname.slice(11);
  } else if (ownProps.location.pathname.slice(1,6) === "users") {
    userId = ownProps.location.pathname.slice(7);
    }

  return ({
    decks: state.decks,
    user_id: userId,
    language_id: languageId
  });

};

const mapDispatchToProps = dispatch => {
  return (
    {requestDecks: () => dispatch(requestDecks()),
    requestLanguages: () => dispatch(requestLanguages())}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
