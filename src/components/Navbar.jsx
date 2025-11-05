import React from 'react';

const Navbar = () => {
  const links = [
    { href: '#hero', label: 'Hero' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#releases', label: 'New Releases' },
    { href: '#audio', label: 'Audio Books' },
  ];

  return (
    <div className="sticky top-4 z-50 flex w-full justify-center px-4">
      <nav className="backdrop-blur bg-white/70 text-slate-800 shadow-lg rounded-full border border-slate-200/60 flex items-center gap-2 px-4 sm:px-6 py-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-[#4169E1]/10 hover:text-[#4169E1] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
