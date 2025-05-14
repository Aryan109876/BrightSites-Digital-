import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import Portfolio from './components/home/Portfolio';
import Testimonials from './components/home/Testimonials';
import Process from './components/home/Process';
import Stats from './components/home/Stats';
import Team from './components/home/Team';
import BlogSection from './components/home/BlogSection';
import ContactForm from './components/home/ContactForm';
import CTASection from './components/home/CTASection';
import LiveChat from './components/home/LiveChat';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "BrightSites Digital | Web Design & Development Agency";
    
    // Add favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://api.iconify.design/lucide:palette.svg?color=%231E3A8A";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <Team />
        <BlogSection />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;