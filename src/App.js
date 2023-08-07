
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import Home from './components/Home';
import Categories from './components/Categories';


function App() {
  return (
    <Router>
      <div className="bg-backg min-h-screen">
        <Routes>
        <Route path='/' element={<Categories />} />
          <Route path='/' element={<AboutUs />} />
          <Route path='/' element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
