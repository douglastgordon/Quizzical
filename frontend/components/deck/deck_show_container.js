import { connect } from 'react-redux';
import DeckShow from './deck_show';
// Actions
import { destroyDeck } from '../../actions/deck_actions';
import { destroyCard, createCard } from '../../actions/card_actions';
import { requestFullDeck } from '../../actions/full_deck_actions';
import { selectDeck } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    deck: state.full_deck,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestFullDeck: id => dispatch(requestFullDeck(id)),
  destroyDeck: id => dispatch(destroyDeck(id)),
  destroyCard: id => dispatch(destroyCard(id)),
  createCard: card => dispatch(createCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckShow);
