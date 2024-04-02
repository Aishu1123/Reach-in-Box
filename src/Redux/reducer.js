const initial = {
  isLoggedIn: false,
  darkMode: true,
  mails: false,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action);
      return { ...state, isLoggedIn: action.payload };
    case "MAILS":
      return { ...state, mails: !state.mails };
    case "THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default reducer;
