import { connect } from 'react-redux';
import NewDeck from './new_deck';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = state => {
  return (
    {currentUser: state.session.currentUser}
  );
};

const mapDispatchToProps = dispatch => {
  return (
    {processForm: (deck) => dispatch(createDeck(deck))}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
