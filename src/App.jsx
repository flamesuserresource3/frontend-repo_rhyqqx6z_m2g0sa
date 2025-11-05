import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import NewReleases from './components/NewReleases';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-800">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="pt-8 sm:pt-12">
          <Hero />
        </div>

        <Achievements />

        <NewReleases />

        <section id="audio" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Audio Books</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-12 sm:p-16 text-center shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4169E1]/10 to-transparent" aria-hidden />
            <p className="relative z-10 text-2xl sm:text-3xl font-semibold text-[#4169E1]">Coming Soon</p>
            <p className="relative z-10 mt-3 text-slate-600">We are crafting a beautiful listening experience.</p>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>Bhavans Adarsha Vidyalaya, Kakkanad, Kochi</span>
          <span>Inspired by modern school design — Royal Blue and White</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
