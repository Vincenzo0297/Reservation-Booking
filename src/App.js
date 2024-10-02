import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main'; // Adjust the path as necessary
import Burger from './Food/Burger'; // Importing Burger from the Food folder
import Pizza from './Food/Pizza'; 
import BrunchCafe from './Food/BrunchCafe'; 
import Mexican from './Food/Mexican'; 
import Japanese from './Food/Japanese'; 
import Korean from './Food/Korean'; 
import Dessert from './Food/Dessert'; 
import Alcohol from './Food/Alcohol';
import Meat from './Food/Meat';
import Pasta from './Food/Pasta';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/Burger" element={<Burger />} /> {/* Route for Burger component */}
        <Route path="/Pizza" element={<Pizza />} /> 
        <Route path="/BrunchCafe" element={<BrunchCafe />} /> 
        <Route path="/Mexican" element={<Mexican />} /> 
        <Route path="/Japanese" element={<Japanese />} /> 
        <Route path="/Korean" element={<Korean />} /> 
        <Route path="/Dessert" element={<Dessert />} /> 
        <Route path="/Alcohol" element={<Alcohol />} /> 
        <Route path="/Meat" element={<Meat />} /> 
        <Route path="/Pasta" element={<Pasta />} /> 
      </Routes>
    </Router>
  );
}

export default App;
