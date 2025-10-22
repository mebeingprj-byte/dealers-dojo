import React from 'react';

function About() {
  return (
    <div className="text-center" data-aos="fade-up">
      <h2 className="font-montserrat text-4xl font-bold text-white mb-8 relative inline-block">
        About Dealer's Dojo
        <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ffd700] rounded-full mt-2"></span>
      </h2>
      <p className="font-poppins text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Dealer’s Dojo empowers young dealers with the skills, mindset, and tools to dominate in the automotive industry. Here, discipline meets creativity, strategy meets action, and learning becomes mastery. Our mission is to create tomorrow’s dealer leaders, today.
      </p>
    </div>
  );
}

export default About;
