import React,{useReducer} from "react";
import AppContext from "./app-context";

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {isLoggedin: true};
    case "LOGOUT":
      return {isLoggedin: false};
    default:
      return state;
  }
}

const initialState = {
  isLoggedin: false
};

function AppProvider({children}){

  const [authState, dispathchAuth] = useReducer(authReducer, initialState);

  function handlelogin() {
    dispathchAuth({
        type: "LOGIN"
        
    })
    // setIsLoggedin(true);
  }

  function handlelogout() {
    dispathchAuth({
        type: "LOGOUT"
        
    })
    // setIsLoggedin(false);
  }

  const appcontextvalue = {
    isLoggedin:authState.isLoggedin,
    handlelogin:handlelogin,
    handlelogout:handlelogout
  }

  return <AppContext.Provider value={appcontextvalue}>{children}</AppContext.Provider>;
}

export default AppProvider;