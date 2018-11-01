import { combineReducers } from 'redux';
import searchResults from './searchResults';
import searchInput from './searchInput';

export default combineReducers({
  searchResults: searchResults,
  searchInput: searchInput
});
