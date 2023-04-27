import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/AboutPage/About';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes>
          <Route path="/om" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
