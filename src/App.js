// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
  useLocation,
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import About from './components/AboutPage/About';
import Policies from './components/Policies/Policies';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import ChatComponent from './components/ChatComponent/ChatComponent';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, filter: 'blur(10px)' },
    enter: { opacity: 1, filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(10px)' },
    config: { duration: 1000 },
  });
  // Define your routes using useRoutes
  const routes = useRoutes([
    { path: '/', element: <ChatComponent /> },
    { path: '/om', element: <About /> },
    { path: '/chatt', element: <ChatComponent /> },
    { path: '/riktlinjer', element: <Policies /> },
  ]);

  return (
    <div className="App">
      <NavbarComponent />
      <main style={{ position: 'relative' }}>
        {transitions((props, item) => (
          <animated.div
            style={{
              ...props,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            {routes}
          </animated.div>
        ))}
      </main>
    </div>
  );
}

export default App;
