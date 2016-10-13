import { connect } from 'react-redux';
import FlashcardView from './flashcard_view';
import { requestFullDeck } from '../../actions/full_deck_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    full_deck: state.full_deck,
    deck_id: ownProps.location.pathname.slice(7)
    });
};

const mapDispatchToProps = dispatch => {
  return ({
    requestFullDeck: (id) => dispatch(requestFullDeck(id))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(FlashcardView);
