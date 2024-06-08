import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact';
import Gallery from './Components/Gallery/Gallery';
import About from './Components/About/About';
import services from './Pages/services';
import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/services/:id" Component={services} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App