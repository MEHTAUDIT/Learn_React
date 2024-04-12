import {createContext} from 'react';

const AppContext = createContext({ 
   isLoggedin: false,
   handlelogin: () => {}
});

export default AppContext;