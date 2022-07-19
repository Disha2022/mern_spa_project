import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/LogIn';

function App() {

  const [loginSelected, setLoginSelected] = useState(false)
  return (
    <div className="App">
      <Nav
      setLoginSelected={setLoginSelected}
      ></Nav>
      <main>
        {!loginSelected ? (
          <>
            <About></About>
            <Contact></Contact>
          </>
        ) : (
          <Login></Login>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
