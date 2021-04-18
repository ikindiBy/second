import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext'

import 'materialize-css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated,
    }}>
      <Router>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
