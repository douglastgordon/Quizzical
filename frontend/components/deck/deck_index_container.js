import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { requestDecks, requestDeck } from '../../actions/deck_actions';
import { requestLanguages } from '../../actions/language_actions';

const mapStateToProps = state => {
  return (
  {decks: state.decks}
  );
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
