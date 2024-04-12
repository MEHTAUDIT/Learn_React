import React,{useState} from "react";

function AppProvider({children}){
  const [isLoggedin, setIsLoggedin] = useState(false);

  function handlelogin() {
    setIsLoggedin(true);
  }

  const appcontextvalue = {
    isLoggedin:isLoggedin,
    handlelogin:handlelogin
  }

  return <AppProvider.Provider value={appcontextvalue}>{children}</AppProvider.Provider>;
}
