import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // could be course: course
  // will be used in the application as state.courses
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
