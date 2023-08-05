import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import React, { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
