import React from 'react';
import ChatComponent from './components/ChatComponent/ChatComponent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/AboutPage/About';
import Policies from './components/Policies/Policies';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';

// Import your components for each route here
// import Riktlinjer from './components/Riktlinjer';
// import UserCase from './components/UserCase';
// import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<ChatComponent />} />
            <Route
              path="/om"
              element={
                <div>
                  <About />
                </div>
              }
            />

            <Route path="/chatt" element={<ChatComponent />} />
            <Route path="/riktlinjer" element={<Policies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
