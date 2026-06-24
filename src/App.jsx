import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LangarSection from './components/LangarSection';
import Schedule from './components/Schedule';
import Services from './components/Services';
import QuoteBanner from './components/QuoteBanner';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cards from './components/cards';
import LeadershipMessages from './components/leadership';
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Cards/>
      <About />
      <Services />
      <QuoteBanner />
      <LangarSection />
      <Schedule />
      <Events />
      <Gallery />
      <Donate />
      <LeadershipMessages/>
      <Contact />
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  return (
    <a
      href="#home"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-saffron-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-saffron-600 hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </a>
  );
}
