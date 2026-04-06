import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Carriers from "../pages/Carriers";
import Contact from "../pages/Contact";
import MyNavbar from "../components/Navbar/MyNavbar";
import Footer from "../components/Footer/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carriers" element={<Carriers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default AppRoutes;