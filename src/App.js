import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/component1" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="/component4" element={<Component4 />} />
          <Route path="/component5" element={<Component5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
