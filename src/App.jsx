import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ChooseSection from './components/ChooseSection'
import AppointmentSection from './components/AppointmentSection'
import ListingSection from './components/ListingSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ChooseSection />
      <AppointmentSection />
      <ListingSection />
      <KeyFeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App

