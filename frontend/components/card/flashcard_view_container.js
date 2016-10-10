import { connect } from 'react-redux';
import FlashcardView from './flashcard_view';


const mapStateToProps = state => {
  return ({
    full_deck: state.full_deck
    });
};

export default connect(mapStateToProps)(FlashcardView);
