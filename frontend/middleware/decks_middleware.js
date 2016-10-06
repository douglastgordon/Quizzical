

const DecksMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case REQUEST_DECKS:
      console.log("time to fetch");
      return next(action);
    default:
      return next(action);
  }
}

export default DecksMiddleware;
