import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { requestDecks, requestDeck } from '../../actions/deck_actions';
import { requestLanguages } from '../../actions/language_actions';

const mapStateToProps = (state, ownProps) => {
  return (
  {decks: state.decks,
  user_id: ownProps.location.pathname.slice(7)}
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
