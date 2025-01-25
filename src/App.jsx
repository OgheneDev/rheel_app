import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ChooseSection from './components/ChooseSection';
import AppointmentSection from './components/AppointmentSection';
import ListingSection from './components/ListingSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import CoreValuesSection from './components/CoreValuesSection';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection id="hero" />
      <FeaturesSection id="features" />
      <ChooseSection id="why-us" />
      <AppointmentSection id="appointments" />
      <ListingSection id="property-listing" />
      <KeyFeaturesSection id="key-features" />
      <CoreValuesSection id="core-values" />
      <DownloadSection id="download" />
      <Footer id="footer" />
    </div>
  );
};

export default App;