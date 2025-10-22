import React, { useState } from 'react';

function JoinWaitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // THIS IS A PLACEHOLDER. The form will not work until this is replaced.
  const GOOGLE_FORM_URL = "YOUR_GOOGLE_FORMS_ACTION_URL"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // --- Google Forms Integration ---
    const googleFormData = new FormData();
    googleFormData.append('entry.123456789', formData.name);  // Placeholder entry ID
    googleFormData.append('entry.987654321', formData.email); // Placeholder entry ID
    googleFormData.append('entry.555555555', formData.role);  // Placeholder entry ID

    try {
      // We will just show a success message without sending for now
      if (GOOGLE_FORM_URL === "YOUR_GOOGLE_FORMS_ACTION_URL") {
        setMessage('Thanks for joining! The form will be connected soon.');
        setFormData({ name: '', email: '', role: '' }); // Clear form
        setIsSubmitting(false);
        return; // Stop here
      }

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms to avoid CORS issues
        body: googleFormData,
      });

      setMessage('Thanks for joining the waitlist! We\'ll be in touch.');
      setFormData({ name: '', email: '', role: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('There was an error joining the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center" data-aos="fade-up">
      <h2 className="font-montserrat text-4xl font-bold text-white mb-8 relative inline-block">
        Join the Dojo Waitlist
        <span className="block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#ffd700] rounded-full mt-2"></span>
      </h2>
      <p className="font-poppins text-lg text-gray-300 max-w-2xl mx-auto mb-10">
        Be among the first to experience Dealer's Dojo. Sign up for early access and updates!
      </p>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-[#0a1f44] border border-[#c0c0c0]/30 rounded-lg shadow-xl relative overflow-hidden group">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-gray-300 mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700]" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-gray-300 mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700]" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="role" className="block text-left text-gray-300 mb-2">Your Role (e.g., Student, Dealer, Manager)</label>
          <input 
            type="text" 
            name="role" 
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#ffd700]" 
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full px-8 py-3 bg-[#ffd700] text-[#0A1F44] font-bold rounded-full text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#ffd700]/50 disabled:bg-gray-500"
        >
          {isSubmitting ? 'Submitting...' : 'Join Now'}
        </button>
        
        {message && (
          <p className="mt-4 text-green-400">{message}</p>
        )}
      </form>
    </div>
  );
}

export default JoinWaitlist;
