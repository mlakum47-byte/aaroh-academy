import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Results from './components/Results';
import Faculty from './components/Faculty';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedCourseForDemo, setSelectedCourseForDemo] = useState('');

  const scrollToDemoForm = (courseTitle = '') => {
    if (courseTitle) {
      setSelectedCourseForDemo(courseTitle);
    }
    const formElement = document.getElementById('demo-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus on first input
      const firstInput = formElement.querySelector('input');
      setTimeout(() => firstInput?.focus(), 400);
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onEnquireClick={() => scrollToDemoForm()} />

      <main id="main-content" tabIndex={-1}>
        {/* 2. Hero Section with Free Demo Enquiry Form */}
        <Hero preselectedCourse={selectedCourseForDemo} />

        {/* 3. Courses Section (Immediately after hero, before results) */}
        <Courses onSelectCourseForDemo={(course) => scrollToDemoForm(course)} />

        {/* 4. Results & Statistics */}
        <Results />

        {/* 5. Faculty Section */}
        <Faculty onEnquiryClick={() => scrollToDemoForm()} />

        {/* 6. Why Choose Aaroh Academy (Exactly 4 points) */}
        <WhyChooseUs />

        {/* 7. Testimonials Carousel */}
        <Testimonials />

        {/* 8. FAQ Accordion (Exactly 6 questions) */}
        <FAQ onContactClick={scrollToContact} />

        {/* 9. Dedicated Gallery Section */}
        <Gallery />

        {/* 10. Contact & Location Section */}
        <Contact onBookDemoClick={() => scrollToDemoForm()} />
      </main>

      {/* 11. Complete Navy Footer */}
      <Footer onCourseClick={(courseTitle) => scrollToDemoForm(courseTitle)} />

      {/* 12. Floating WhatsApp Click-to-Chat Button */}
      <WhatsAppButton />
    </div>
  );
}
