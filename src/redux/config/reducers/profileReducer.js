// profileReducer.js
const initialState = {
  username: '',
  avatarURL: ''
};

// Profile reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload
      };
    case 'SET_AVATAR_URL':
      return {
        ...state,
        avatarURL: action.payload
      };
    default:
      return state;
  }
};
