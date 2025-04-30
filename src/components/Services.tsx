import React from 'react';
import serviceImage from '../assets/images/service.png';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-[#6BA1EC] w-full mb-2">
      <img
        src={serviceImage}
        alt="Service"
        className="w-3/4 h-full mx-auto relative z-10"
      />
    </div>
  );
};

export default Services;
