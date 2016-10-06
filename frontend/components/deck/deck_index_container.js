import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { requestDecks, requestDeck } from '../../actions/deck_actions';

const mapStateToProps = state => {
  return (
  {decks: state.decks}
);
};

const mapDispatchToProps = dispatch => {
  return (
    {requestDecks: () => dispatch(requestDecks())}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
