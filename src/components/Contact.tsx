import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit to a backend service
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '' });
    alert('Thank you for subscribing!');
  };

  return (
    <div className="text-white">
      <div className="container mx-auto px-4 py-16 bg-[#14145e]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-6 text-[#65b7ff]">Let's Connect</h2>
            <div className="flex items-start space-x-3 mb-3">
              <Mail className="text-[#65b7ff] mt-1" size={20} />
              <a href="mailto:FFPathway@gmail.com" className="hover:text-[#65b7ff] transition-colors">
                FFPathway@gmail.com
              </a>
            </div>
            <div className="flex items-start space-x-3 mb-6">
              <Phone className="text-[#65b7ff] mt-1" size={20} />
              <span>Phone: 714-414-2300</span>
            </div>
            <div className="flex items-start space-x-3 mb-6">
              <Mail className="text-[#f0c050] mt-1" size={20} />
              <a href="/contact" className="text-[#f0c050] font-bold text-xl hover:text-[#e0b040] transition-colors">
                Talk to Me
              </a>
            </div>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-[#65b7ff] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#65b7ff] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#65b7ff] transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:text-[#65b7ff] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Email List</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white focus:border-[#65b7ff] outline-none p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white focus:border-[#65b7ff] outline-none p-2"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white focus:border-[#65b7ff] outline-none p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-[#65b7ff] hover:bg-[#4a90e2] text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;