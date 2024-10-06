import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import services from './Pages/services';
import Home from './Pages/Home';
import Crew from './Components/Crew/Crew';
import CTA from './Components/CTA/CTA';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/crew" Component={Crew} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/services/:id" Component={services} />
      </Routes>
      {/* <CTA/> */}
      <Footer />
    </Router>
  );
}

export default App