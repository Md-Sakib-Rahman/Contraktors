import React from 'react';
import HeroBg from '../../assets/HeroBg.mp4';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[85vh] overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          src={HeroBg} 
          autoPlay 
          loop 
          muted 
          playsInline /* Critical for iOS mobile autoplay */
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full bg-black/60 flex flex-col justify-center items-center px-4">
        <h2 className="
          text-5xl        /* Mobile font size */
          sm:text-6xl     /* Tablet font size */
          md:text-7xl     /* Desktop font size */
          lg:text-8xl     /* Large Desktop font size */
          poppins font-extrabold tracking-tighter text-white text-center
        ">
          CONTRAKTORS
        </h2>
        
        <div className="h-1 w-12 bg-white my-4 md:my-6"></div> {/* Visual separator */}
        
        <p className="
          text-lg         /* Mobile */
          md:text-2xl     /* Desktop */
          roboto uppercase tracking-[0.2em] text-gray-300 text-center
        ">
          Order Under Pressure
        </p>
      </div>
    </section>
  );
};

export default Hero;