import { connect } from 'react-redux';
import Play from './play';
import { requestFullDeck } from '../../actions/full_deck_actions';
import { requestHighScore, createScore } from '../../actions/score_actions';

const mapStateToProps = (state, ownProps) => {
  let hi_score = 0;
  let hi_scorer = "";
   if (state.high_score.score){
    hi_score = state.high_score.score;
    hi_scorer = state.high_score.user;
   }
  return ({
    full_deck: state.full_deck,
    deck_id: ownProps.location.pathname.slice(6),
    currentUser: state.session.currentUser,
    hi_score,
    hi_scorer
    });
};

const mapDispatchToProps = dispatch => {
  return ({
    requestFullDeck: (id) => dispatch(requestFullDeck(id)),
    requestHighScore: (id) => dispatch(requestHighScore(id)),
    createScore: (score) => dispatch(createScore(score))
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(Play);
