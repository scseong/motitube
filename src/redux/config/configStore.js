<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../modules/Auth';

const store = configureStore({
  reducer: {
    AuthSlice
  }
=======
import { createStore, combineReducers } from 'redux';
import profileReducer from './reducers/profileReducer';
import postReducer from './reducers/postReducer';
import passwordReducer from './reducers/passwordReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  post: postReducer,
  password: passwordReducer
>>>>>>> 7e718c2164e98317ae3322c1eaddd5854da14658
});

const store = createStore(rootReducer);

export default store;

