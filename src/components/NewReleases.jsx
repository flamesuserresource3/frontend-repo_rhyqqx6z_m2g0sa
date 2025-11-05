import React, { useMemo, useState } from 'react';

const demoBooks = [
  {
    title: 'The Blue Horizon',
    author: 'A. K. Menon',
    cover:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1974&auto=format&fit=crop',
    summary:
      'A serene exploration of human curiosity and the call of the unknown, set across coastal Kerala.',
    available: true,
  },
  {
    title: 'Mathematics Simplified',
    author: 'R. Nair',
    cover:
      'https://images.unsplash.com/photo-1526312426976-593c2ce5d3e7?q=80&w=1974&auto=format&fit=crop',
    summary:
      'A friendly guide to core mathematical concepts with visual intuition and practice problems.',
    available: true,
  },
  {
    title: 'Echoes of the Banyan',
    author: 'Devika Pillai',
    cover:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop',
    summary:
      'Short stories that weave nostalgia, culture, and modernity through the eyes of young students.',
    available: false,
  },
  {
    title: 'Physics for Curious Minds',
    author: 'Dr. M. Joseph',
    cover:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
    summary:
      'Concept-first explanations that make mechanics, light, and waves feel intuitive and fun.',
    available: true,
  },
];

const Badge = ({ available }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium border ${
      available
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
        : 'bg-rose-50 text-rose-700 border-rose-200'
    }`}
  >
    {available ? 'Available' : 'Checked out'}
  </span>
);

const NewReleases = () => {
  const [selected, setSelected] = useState(null);
  const books = useMemo(() => demoBooks, []);

  return (
    <section id="releases" className="mt-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">New Releases</h2>
        <span className="text-sm text-slate-500">Tap a book to preview</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((b, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(b)}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 shadow hover:shadow-lg transition-shadow text-left"
            aria-label={`Open details for ${b.title}`}
          >
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${b.cover})` }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-semibold drop-shadow-sm">{b.title}</h3>
              <p className="text-sm text-white/90">{b.author}</p>
              <div className="mt-2">
                <Badge available={b.available} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div
                className="h-56 md:h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${selected.cover})` }}
              />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{selected.title}</h3>
                    <p className="mt-1 text-slate-600">{selected.author}</p>
                  </div>
                  <Badge available={selected.available} />
                </div>
                <p className="mt-6 text-slate-700 leading-relaxed text-sm sm:text-base">
                  {selected.summary}
                </p>
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center rounded-full bg-[#4169E1] text-white px-5 py-2.5 font-semibold shadow hover:shadow-md transition-shadow"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewReleases;
