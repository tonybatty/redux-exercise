function searchInput(state = { query: "" }, action) {
  switch (action.type) {
    case "SET_QUERY":
      const stateQueryUpdated = Object.assign({}, state, {
        selectedQuery: action.selectedQuery
      });
      return stateQueryUpdated;
    default:
      return state;
  }
}

export default searchInput;
