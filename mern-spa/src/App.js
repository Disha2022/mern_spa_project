import './App.css';
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        "I'm Displaying!"
        <Contact></Contact>
      </main>
      <footer className='border-top'>
        <button> Donate Now!</button>
      </footer>
    </div>
  );
}

export default App;
