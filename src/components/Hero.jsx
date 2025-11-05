import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] overflow-hidden rounded-2xl sm:rounded-3xl">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#4169E1]/40" aria-hidden />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6 py-24 sm:py-28">
        <div className="max-w-4xl text-white">
          <p className="uppercase tracking-widest text-sm sm:text-base lg:text-lg/relaxed text-white/90">Bhavans Adarsha Vidyalaya</p>
          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow">
            Kakkanad, Kochi, Kerala
          </h1>
          <p className="mt-6 text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
            A modern, elegant school experience inspired by the best — with a unique creative twist.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#achievements" className="inline-flex items-center rounded-full bg-white text-[#4169E1] px-5 py-2.5 font-semibold shadow hover:shadow-md transition-shadow">
              Explore Achievements
            </a>
            <a href="#releases" className="inline-flex items-center rounded-full border border-white/80 text-white px-5 py-2.5 font-semibold hover:bg-white/10 transition-colors">
              New Releases
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
