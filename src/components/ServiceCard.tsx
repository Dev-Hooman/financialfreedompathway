import React from 'react';

interface ServiceCardProps {
  title: string;
  image: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, color }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[300px] transition-transform duration-300 hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-70`}></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;