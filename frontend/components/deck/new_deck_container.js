import { connect } from 'react-redux';
import NewDeck from './new_index';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = state => {
  return (
    currentUser: state.session.currentUser
  );
};

const mapDispatchToProps = dispatch => {
  return (
    {createDecks: () => dispatch(createDecks())}
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);
