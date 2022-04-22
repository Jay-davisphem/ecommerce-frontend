const reducer = (state, action) => {
  if (typeof window !== "undefined") {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("cred", JSON.stringify(action.payload.cred));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isLoggedIn: true,
          cred: action.payload.cred,
          token: action.payload.token,
        };

      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isLoggedIn: false,
          cred: null,
        };
      default:
        return state;
    }
  }
};

export default reducer;
