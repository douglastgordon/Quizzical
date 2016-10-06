import { connect } from 'react-redux';
import DeckShow from './deck_show';
// Actions
import { requestDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
  const deckId = parseInt(ownProps.params.deckId);
  const deck = selectDeck(state.decks, deckId);
  return {
    deckId,
    deck
  };
};

const mapDispatchToProps = dispatch => ({
  requestDeck: id => dispatch(requestDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
