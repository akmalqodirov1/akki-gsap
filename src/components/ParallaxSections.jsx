import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section1 from './Section1';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections = () => {
  useEffect(() => {
    const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
    
    const sections = gsap.utils.toArray('.section');
    
    sections.forEach((section, ) => {
      const bg = section.querySelector('.bg');
      
      // Barcha section'lar uchun bir xil parallax effekt
      gsap.fromTo(bg, {
        backgroundPosition: () => `50% ${-window.innerHeight * getRatio(section)}px`
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // BU YERDA RASMLARINGIZNI QO'YING
  // Har bir section uchun rasm URL ini o'zgartiring
  const images = [
    '../../src/assets/images/couple2.avif',
    '../../src/assets/images/firstpage.jpg',
    '../../src/assets/images/first.avif',
    '../../src/assets/images/child.jpg',
    

    
    
  ];

  return (
    <div className="parallax-container">
      {/* Birinchi intro section - parallax bilan */}
      <section className="section intro-section">
        <div 
          className="bg" 
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <Section1/>
      </section>

      {/* Ikkinchi parallax section */}
      <section className="section">
        <div 
          className="bg" 
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>
        <h1 className="section-title"></h1>
      </section>

      {/* Uchinchi parallax section */}
      <section className="section">
        <div 
          className="bg" 
          style={{ backgroundImage: `url(${images[2]})` }}
        ></div>
        <h1 className="section-title"></h1>
      </section>

      {/* To'rtinchi parallax section */}
      <section className="section">
        <div 
          className="bg" 
          style={{ backgroundImage: `url(${images[3]})` }}
        ></div>
        <h1 className="section-title"></h1>
      </section>

    </div>
  );
};

export default ParallaxSections;