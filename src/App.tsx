/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Treatments from './components/Treatments';
import Tech from './components/Tech';
import PatientJourney from './components/PatientJourney';
import Results from './components/Results';
import Reviews from './components/Reviews';
import Team from './components/Team';
import WarningSigns from './components/WarningSigns';
import Appointment from './components/Appointment';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Treatments />
        <Tech />
        <PatientJourney />
        <Results />
        <Reviews />
        <Team />
        <WarningSigns />
        <Appointment />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
