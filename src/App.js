import Login from './components/login';
import AppProvider from './store/AppProvider';

function App() {

  return <AppProvider>
    <h1>Hello Context</h1>
    <Login />
  </AppProvider>;
}

export default App;
