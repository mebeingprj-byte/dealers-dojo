import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import JoinWaitlist from './components/JoinWaitlist';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LeaderboardCard from './components/LeaderboardCard'; // Placeholder for interactive elements
import ChallengeCard from './components/ChallengeCard'; // Placeholder for interactive elements
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A1F44] text-gray-200 font-roboto overflow-x-hidden">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </section>
        <section id="features" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Features />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <LeaderboardCard />
            <ChallengeCard />
          </div>
        </section>
        <section id="join" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JoinWaitlist />
        </section>
        <section id="testimonials" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
