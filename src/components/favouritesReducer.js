export const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

export const favoritesReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const exists = state.find(id => id === action.payload);
      newState = exists 
        ? state.filter(id => id !== action.payload) 
        : [...state, action.payload];
      break;
    default:
      return state;
  }
  localStorage.setItem('favorites', JSON.stringify(newState));
  return newState;
};