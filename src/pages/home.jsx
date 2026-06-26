
import Hero from '../components/Hero';
import About from '../components/About';
import LangarSection from '../components/LangarSection';
import Schedule from '../components/Schedule';
import Services from '../components/Services';
import QuoteBanner from '../components/QuoteBanner';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Donate from '../components/Donate';
import Contact from '../components/Contact';
import Cards from '../components/cards';
import LeadershipMessages from '../components/leadership';
export default function home() {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero
        bgImage="/images/img1.jpeg"
        title={
          <>
            Gurudwara Sri Guru <br />
            <span className="text-saffron-300">
              Singh Sabha
            </span>
          </>
        }
        subtitle="Rajouri Garden, New Delhi"
        description="A sacred abode of peace, devotion, and community service. Open to all, serving all — in the spirit of Sikh teachings."
        primaryBtnText="View Daily Schedule"
        primaryBtnLink="#schedule"
        secondaryBtnText="Learn More"
        secondaryBtnLink="#about"
        showMoolMantar={true}
      />
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
     

  
    </div>
  );
}
