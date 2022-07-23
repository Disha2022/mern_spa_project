import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider>
      <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path='/'
              element={<Homepage />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
