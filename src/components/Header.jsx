import React, { useState } from 'react';
// We have removed the logo import because we do not have the image file.

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Join Waitlist', href: '#join' },
  ];

  return (
    <header className="fixed w-full z-50 bg-[#0A1F44]/90 backdrop-blur-sm shadow-lg border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3" aria-label="Dealer's Dojo Home">
          {/* <img src={dojoLogo} alt="Dealer's Dojo Logo" className="h-8 md:h-10" /> */}
          <span className="font-montserrat text-xl md:text-2xl font-bold text-white tracking-wider">DEALER'S DOJO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-300 hover:text-white transition-colors duration-300 font-poppins text-lg hover:text-[#ffd700] relative group">
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ffd700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
          <a
            href="#" // Replaced with placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2 bg-[#ffd700] text-[#0A1F44] font-bold rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#ffd700]/50 relative overflow-hidden group"
            aria-label="Join the Dojo on Discord"
          >
            <span className="relative z-10">Join the Dojo on Discord</span>
            <span className="absolute inset-0 bg-gradient-to-br from-[#ffd700] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700]"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#0A1F44] py-4 border-t border-gray-800 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#" // Replaced with placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block px-3 py-2 rounded-md text-base font-medium bg-[#ffd700] text-[#0A1F44] text-center hover:bg-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Join the Dojo on Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
