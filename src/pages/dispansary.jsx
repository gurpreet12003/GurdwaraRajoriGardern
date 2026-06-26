import React from 'react'
import Hero from '../components/Hero'
import About from '../components/dispansary/About'
import Services from '../components/dispansary/Services'
import Donate from '../components/Donate'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import LeaderCard from '../components/dispansary/message'
import Schedule from '../components/dispansary/Schedule'
import DispensaryInfo from '../components/dispansary/timeingAndConatact'
import DispensaryFeatures from '../components/dispansary/feature'
import FeedbackSection from '../components/dispansary/Feedback'
import SocialMediaSection from '../components/dispansary/SocialMedia'

const Dispasary = () => {
  return (<>
    <div>
      <Hero
        bgImage="/images/dispensaryBanner.png"
        // title={
        //   <>
        //     Guru Nanak Charitable <br />
        //     <span className="text-saffron-300">
        //       Dispensary & Clinical Lab
        //     </span>
        //   </>
        // }
        // subtitle="Healthcare For All"
        // description="Providing consultations, medicines, diagnostics and healthcare services with compassion and Seva."
        // primaryBtnText="Our Services"
        bgPosition="center 0%"
        showOverlay={true}
        // primaryBtnLink="#services"        // secondaryBtnText="Contact Us"
        // secondaryBtnLink="#contact"
      />
      <About />
      <LeaderCard />
      <Services />
      <Schedule />
      <DispensaryInfo />
      <DispensaryFeatures />
      <Gallery />
      <Donate />
      <FeedbackSection/>
      <SocialMediaSection/>
      <Contact />
    </div>
  </>

  )
}
<>
</>
export default Dispasary
