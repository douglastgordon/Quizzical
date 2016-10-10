import { connect } from 'react-redux';
import NewCard from './new_card';
import { createCard} from '../../actions/card_actions';

const mapStateToProps = state => {
  return ({
    deck_id: state.full_deck.id
    });
};

export default connect(
  mapStateToProps)(NewCard);
