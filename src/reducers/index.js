import { combineReducers } from 'redux';
import placeholder from './placeholder';
import searchInput from './searchInput';

export default combineReducers({
  placeholder,
  searchInput: searchInput
});
