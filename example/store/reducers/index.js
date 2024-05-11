import {combineReducers} from 'redux';
import countReducer from './counterReducer';
import totoReducer from './todoReducer';

const rootReducer = combineReducers({
  counter: countReducer,
  todo: totoReducer,
});

export default rootReducer;
