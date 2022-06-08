import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { store } from './redux/configureStore';
import Dashboard from './views/dashboard/Dashboard';
import LogIn from './views/login/LogIn';
import './App.css';

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </ReduxProvider>
  );
}

export default App;
