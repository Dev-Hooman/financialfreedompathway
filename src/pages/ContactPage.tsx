import React, { useState } from 'react';
import { Facebook, Linkedin, Youtube, Instagram, Mail, Phone, Link } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <div className="text-white mb-2">
        <div className="flex flex-col md:flex-row h-full container mx-auto bg-[#6BA1EC]">
          {/* Text Content */}
          <div className='container mx-auto flex flex-col justify-center items-center md:items-start md:w-1/2 px-4 '>
            <div className="w-full flex flex-col justify-center items-center  ">
              <div>
                <div className='flex items-center space-x-4'>
                  <h1 className="text-4xl lg:text-12xl">
                    <span className='font-bold'>
                      Contact
                    </span>
                    <span className='text-lg text-[#120B70] font-semibold ml-2'>
                      Kathy Cuevas,
                    </span>
                    <span className='text-base text-[#120B70] ml-2'>
                      Financial Coach
                    </span>
                  </h1>
                </div>

                <h2 className="text-lg font-bold tracking-wider mb-8">
                  Ready to Take Control of Your Financial Future?
                </h2>
                <p className="text-base lg:text-lg mb-8 leading-relaxed">
                  I'm here to help you navigate the path to financial success. Whether you're looking to refine your budgeting strategy,
                  plan for a secure retirement, or simply get a clearer picture of your finances,
                  I offer personalized guidance tailored to your unique goals.
                </p>
                <p className="text-base lg:text-lg mb-8 leading-relaxed">
                  Take the first step—reach out today to schedule a free consultation, and let's work together to build the future you deserve.
                  Your financial journey begins with a single conversation. Contact me now!
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://static.wixstatic.com/media/3f5702_2e1a71cd02b548afaece0198bdaf7469~mv2.jpg/v1/fill/w_419,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3f5702_2e1a71cd02b548afaece0198bdaf7469~mv2.jpg"
              alt="Kathy Cuevas, Financial Coach"
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-100 mb-2">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} />
                  <span>FFPathway@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} />
                  <span>Phone: 714-414-2300</span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <Facebook size={24} />
                  <Instagram size={24} />
                  <Youtube size={24} />
                  <Linkedin size={24} />
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-2 border border-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#65b7ff] text-white font-semibold py-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;