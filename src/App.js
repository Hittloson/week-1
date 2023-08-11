
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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/categories' element={<Categories />} />
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
