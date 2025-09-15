import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";


function App() {
   
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/portfolio/"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
         <Footer />
    </BrowserRouter>
    
  );
}
export default App;