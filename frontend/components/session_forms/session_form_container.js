import { connect } from 'react-redux';
import SessionFormComponent from './session_form_component';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: (state.session.currentUser !== null),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  let formType = ownProps.location.pathname.slice(1);
  let action = ((formType === "login") ? login : signup);

    return {
      formType,
      processForm: (user) => dispatch(action(user))
    };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormComponent);
