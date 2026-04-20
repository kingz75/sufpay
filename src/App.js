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
import Profile from "./pages/about/profile";
import Projects from "./pages/projects";
import Product from "./pages/product";
import Service from "./pages/service";
import Pricing from "./pages/pricing";
import Contact from "./pages/Contact";
import ChatBotPage from "./pages/ChatBotPage";

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
          <Route path="/about/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<ChatBotPage />} />

          {/* <Route path="/developer-docs" element={<DeveloperDocs />} />
          <Route path="/signin" element={<Signin />} />  */}

          {/* su Sub Routes */}
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