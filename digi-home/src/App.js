import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar1 from "./components/common/NavBar/Navbar";
import CompanyChatWidget from "./components/common/ChatBox/ChatBox";
import BackToTopButton from "./components/common/BackToTop/BacktoTop";

import WakeLanding from "./Pages/Home/WakeLanding";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar1 />
      <CompanyChatWidget />
      <BackToTopButton />

      <Routes>
        <Route path="/" element={<WakeLanding />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;