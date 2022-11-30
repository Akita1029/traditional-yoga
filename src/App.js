
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>
        <Route path='/about' element= { <AboutUsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
