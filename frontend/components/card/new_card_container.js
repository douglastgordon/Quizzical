import { connect } from 'react-redux';
import NewCard from './new_card';
import { addCard, updateCard } from '../../actions/card_form_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    deck_id: state.full_deck.id,
    temp_id: ownProps.id
    });
};

const mapDispatchToProps = dispatch => {
  return({
    addCard: (id) => dispatch(addCard(id)),
    updateCard: (card) => dispatch(updateCard(card))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
