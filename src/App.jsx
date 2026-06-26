import { Routes, Route } from "react-router-dom";

import Home from "./pages/home"
import Navbar from './components/Navbar';
import Dispasary from "./pages/dispansary";
import Footer from './components/Footer';
import ScrollToTopButton from "./components/scrollToTop";
export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dispansary" element={<Dispasary />} />

      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  return (
    <a
      href="#hero"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-saffron-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-saffron-600 hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  );
}
