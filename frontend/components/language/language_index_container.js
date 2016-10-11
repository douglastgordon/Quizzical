import { connect } from 'react-redux';
import LanguageIndex from './language_index';

const mapStateToProps = state => ({
  languages: state.languages
});

// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch(logout())
// });

export default connect(mapStateToProps)(LanguageIndex);
