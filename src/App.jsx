import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./pages/ComingSoon";
import Praktikblog from "./pages/Praktikblog";

function App() {
   
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/Praktikblog" element={<Praktikblog />} />
      </Routes>
         <Footer />
    </BrowserRouter>
    
  );
}
export default App;