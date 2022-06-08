import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux/configureStore';
import LogIn from './views/login/LogIn';
import './App.css';

function App() {
  return (
    <ReduxProvider store={store}>
      <LogIn/>
    </ReduxProvider>
  );
}

export default App;
