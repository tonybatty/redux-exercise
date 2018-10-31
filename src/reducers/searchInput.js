function searchInput(state = { query: "" }, action) {
  switch (action.type) {
    case "SET_QUERY":
      const stateQueryUpdated = Object.assign({}, state, {
        query: action.query
      });
      return stateQueryUpdated;
    default:
      return state;
  }
}

export default searchInput;
