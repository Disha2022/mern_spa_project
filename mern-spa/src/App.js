import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/LogIn';

function App() {
  const[contactSelected, setContactSelcted] = useState(false)
  const [loginSelected, setLoginSelected] = useState(false)
  return (
    <div className="App">
      <Nav
        setLoginSelected={setLoginSelected}
        setContactSelcted={setContactSelcted}
      ></Nav>
      <main>
        
        {!loginSelected ?  (
          <>
            <About></About>
          </>
        ) : (
          <Login></Login>
        )}

        {!contactSelected ? (
          <>
          </>
        ): (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
