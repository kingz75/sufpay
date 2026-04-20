import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// MAIN PAGES

import Home from "./pages/Home";
import Aboutus from "./pages/about/aboutus";
import Projects from "./pages/projects";
// import Product from "./pages/product";
import Service from "./pages/service";
// import Pricing from "./pages/pricing";
// import Contact from "./pages/Contact";
// import DeveloperDocs from "./pages/developerDocs";
// import Signin from "./pages/signin";

// import Aboutus from "./pages/about/aboutus";
// import Profile from "./pages/about/ourprofile";

export default function App() {
  function AppContent() {
    const location = useLocation();
    return (
      <>
        <Header />

        <Routes>
          {/* Main Routes */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/about/aboutus" element={<Aboutus />} />

          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />

          {/* Other Routes */}
        </Routes>

        <Footer />
      </>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
