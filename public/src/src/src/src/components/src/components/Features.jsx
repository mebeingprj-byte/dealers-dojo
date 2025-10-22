import React from 'react';
// We have removed the image imports because we do not have the image files.

function Features() {
  const featureCards = [
    {
      title: 'Gamified Training',
      description: 'Interactive modules designed to sharpen your skills and make learning fun.',
      // image: gamifiedTrainingBanner, // Removed
      alt: 'Neon-lit digital dashboard showing gamified progress bars and skill icons'
    },
    {
      title: 'Dealer Simulation',
      description: 'Practice real-life sales scenarios in a safe, competitive environment.',
      // image: dealerSimulationBanner, // Removed
      alt: '3D dealership floor concept with UI overlays showing deal flow and negotiation pop-ups'
    },
    {
      title: 'Community & Leaderboards',
      description: 'Engage with other dealers, compete on skill leaderboards, and grow together.',
      // image: communityLeaderboardBanner, // Removed
      alt: 'Animated leaderboard UI with avatars and badges, glowing neon accents'
    },
    {
      title: 'AI Insights',
      description: 'Actionable insights to improve your strategy.',
      // image: '/assets/ai-insights-banner.webp', // Removed
      alt: 'Abstract digital representation of AI processing data'
    }
  ];

  return (
    <div className="text-center">
      <h2 className="font-montserrat text-4xl font-bold text-white mb-12 relative inline-block" data-aos="fade-up">
        Key Features
        <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ffd700] rounded-full mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#0a1f44] border border-[#c0c0c0]/30 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 relative group"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* We have removed the <img> tag here because the image file is missing */}
            <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500">
              (Image Placeholder)
            </div>
            <div className="p-6">
              <h3 className="font-poppins text-2xl font-semibold text-white mb-3 text-center">
                {card.title}
              </h3>
              <p className="font-roboto text-gray-300 text-center">
                {card.description}
              </p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffd700] rounded-lg transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
