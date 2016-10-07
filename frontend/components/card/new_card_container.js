import { connect } from 'react-redux';
import NewCard from './new_card';
import { createCard} from '../../actions/card_actions';

const mapStateToProps = state => {
  return ({
    deck_id: state.full_deck.id
    });
};

const mapDispatchToProps = dispatch => {
  return (
    {processForm: (card) => dispatch(createCard(card))}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCard);
