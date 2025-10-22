import React from 'react';
// We removed the image import and the useEffect/useRef for the parallax effect, as we don't have the image file.

function Hero() {
  // We removed the useEffect and useRef hooks for the parallax effect.

  return (
    <div
      // We removed the ref and style={{...}}
      className="relative h-screen flex items-center justify-center bg-gray-900" // Replaced background image with a solid color
      role="banner"
      aria-label="Dealer's Dojo Hero Section"
    >
      {/* We don't need the dark overlay if it's a solid background color */}
      <div className="relative z-10 text-center px-4 max-w-4xl" data-aos="fade-up" data-aos-delay="200">
        <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide drop-shadow-lg">
          Dealer’s Dojo — where the next generation of dealers are forged to think sharper, sell smarter, and lead the drive.
        </h1>
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 drop-shadow-md">
          A platform for modern automotive mastery — gamified training, simulations, and real-world skill-building.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#join"
            className="px-8 py-4 bg-[#ffd700] text-[#0A1F44] font-bold rounded-full text-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#ffd700]/50 relative overflow-hidden group"
            aria-label="Enter the Dojo and join our waitlist"
          >
            <span className="relative z-10">Enter the Dojo</span>
            <span className="absolute inset-0 bg-gradient-to-br from-[#ffd700] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a
            href="#" // Replaced with placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#c0c0c0] text-[#c0c0c0] font-bold rounded-full text-xl hover:bg-[#c0c0c0] hover:text-[#0A1F44] transition-all duration-300 shadow-lg hover:shadow-[#c0c0c0]/50 relative overflow-hidden group"
            aria-label="Join the Dojo on Discord"
          >
            <span className="relative z-10">Join the Dojo on Discord</span>
            <span className="absolute inset-0 bg-gradient-to-br from-[#c0c0c0] to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
