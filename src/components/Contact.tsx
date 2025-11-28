import React from "react";

const Contact: React.FC = () => {
  return (

    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-800 text-white min-h-screen py-20 px-6">
      
          <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center">
  <div className="flex flex-col items-center gap-4">
    
    <h1 className="text-4xl font-bold mb-2 text-teal-400">Contact Us</h1>
    <p className="text-gray-300 mt-1 max-w-xl">
      Tell us about your project and we’ll provide a tailored plan and quote..
    </p>
  </div>
</header>
      <section
        id="contact"
        className="bg-white/5 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto"
      >
        
        <h3 className="text-2xl font-bold text-white">Talk to us</h3>
     

        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none text-white"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none text-white"
            required
          />
          <input
            type="text"
            placeholder="Company (optional)"
            className="p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none md:col-span-2 text-white"
          />
          <textarea
            placeholder="Brief description of your project"
            rows={4}
            className="p-3 rounded-lg bg-transparent border border-white/10 focus:outline-none md:col-span-2 text-white"
            required
          />

          <button
            type="submit"
            className="md:col-span-2 bg-green-500 hover:bg-green-600 px-4 py-3 rounded-lg font-medium text-white transition"
          >
            Send enquiry
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
