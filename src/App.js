import { useState } from 'react';
import AppContext from './store/app-context';
import Login from './components/login';

function App() {
  // const ctx = useContext(AppContext);
  const [isLoggedin, setIsLoggedin] = useState(false);

  function handlelogin() {
    setIsLoggedin(true);
  }

  return <AppContext.Provider value={{isLoggedin:isLoggedin,handlelogin:handlelogin}}>
    <h1>Hello Context</h1>
    <Login />
  </AppContext.Provider>;
}

export default App;
