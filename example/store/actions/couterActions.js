import {DECREMENT, INCREMENT, RESET} from '../types/countTpes';

const incrementCount = () => {
  return async dispatch => {
    dispatch({type: INCREMENT});
  };
};
const decrementCount = () => {
  return async dispatch => {
    dispatch({type: DECREMENT});
  };
};
const resetCount = value => {
  return async dispatch => {
    dispatch({
      type: RESET,
      payload: value,
    });
  };
};

export {decrementCount, incrementCount, resetCount};
