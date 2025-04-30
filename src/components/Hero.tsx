import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="text-white mb-2">
      <div className="flex flex-col md:flex-row h-full container mx-auto bg-[#14145e]">
        {/* Text Content */}
        <div className='container mx-auto flex flex-col justify-center items-center md:items-start md:w-1/2 px-4'>
          <div className="w-full flex flex-col justify-center items-center  ">
            <div >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Financial Freedom Pathway
              </h1>
              <h2 className="text-lg font-bold tracking-wider mb-8">
                EMPOWERING WOMEN TO MASTER THEIR MONEY
              </h2>
              <p className="text-base lg:text-lg mb-8 leading-relaxed">
                I'm passionate about helping women by walking alongside you to
                achieve financial success and secure your future. Whether you're
                working on budgeting, debt management, credit, retirement planning, or
                investing, I'm here to guide you every step of the way. Schedule a free
                consultation to discuss your unique situation, get answers to your
                questions, and create a personalized plan to reach your financial goals.
                Let's take the first step toward a brighter, more confident future!
              </p>
            </div>

            <div className='mb-4 md:mb-0'>
              <Link
                to="/contact"
                className="bg-[#f0c050] hover:bg-[#e0b040] text-[#14145e] font-bold py-3 px-6 rounded-full transition-colors inline-block shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://static.wixstatic.com/media/3f5702_2e1a71cd02b548afaece0198bdaf7469~mv2.jpg/v1/fill/w_419,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3f5702_2e1a71cd02b548afaece0198bdaf7469~mv2.jpg"
            alt="Kathy Cuevas, Financial Coach"
            className="object-contain ml-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
