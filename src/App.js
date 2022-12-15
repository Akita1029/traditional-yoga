
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage';
import MainLayout from './pages/MainLayout';
import CoursesMainPage from './pages/CoursesMainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> }/>

        <Route path='/ty' element={ <MainLayout /> }>
          <Route path="about" element={ <AboutUsPage /> } />
          <Route path="courses" element={ <CoursesMainPage /> } />
          <Route path="library" element={ <></> } />
          <Route path="contactus" element={ <></> } />
          <Route path="donations" element={ <></> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
