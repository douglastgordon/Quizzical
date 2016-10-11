import { connect } from 'react-redux';
import FlashcardView from './flashcard_view';
import { requestFullDeck } from '../../actions/full_deck_actions';

const mapStateToProps = state => {
  return ({
    full_deck: state.full_deck
    });
};

const mapDispatchToProps = dispatch => {
  return ({
    requestFullDeck: (id) => dispatch(requestFullDeck(id))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(FlashcardView);
