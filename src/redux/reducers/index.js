import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';
import video from './video';

export default combineReducers({
  app,
  video,
  routing: routerReducer,
});
