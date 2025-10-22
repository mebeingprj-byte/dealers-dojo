import React from 'react';

function Footer() {
  return (
    <footer className="py-8 bg-[#0A1F44] border-t border-gray-800 text-center text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} Dealer's Dojo. All rights reserved.</p>
        <p className="mt-2">A placeholder footer for the landing page.</p>
      </div>
    </footer>
  );
}

export default Footer;
