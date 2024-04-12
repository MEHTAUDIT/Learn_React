import React from "react";
import { useContext } from "react";
import AppContext from "../store/app-context";

function Login() {

  const {isLoggedin,handlelogin} = useContext(AppContext);

  return <div>{isLoggedin?"welcome":<button onClick={handlelogin}>Login</button>}</div>
};

export default Login;