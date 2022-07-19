import './App.css';
import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
