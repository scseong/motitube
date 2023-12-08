import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import postReducer from './reducers/postReducer';
import passwordReducer from './reducers/passwordReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  post: postReducer,
  password: passwordReducer
});

const store = createStore(rootReducer);

export default store;
