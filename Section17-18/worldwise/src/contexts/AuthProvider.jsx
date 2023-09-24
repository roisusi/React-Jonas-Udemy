import React, { createContext, useReducer } from "react";

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      throw new Error("Unknown action type");
  }
};

const initialState = {
  user: null,
  isAuthenticated: false
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    const FAKE_USER = {
      name: "Jack",
      email: "jack@example.com",
      password: "qwerty",
      avatar: "https://i.pravatar.cc/100?u=zz"
    };

    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
