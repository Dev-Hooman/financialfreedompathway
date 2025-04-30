import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-[#402802]">
      <div className="container mx-auto px-4 text-center bg-[#65b7ff] h-full  py-6">
        <p>&copy; {currentYear} Financial Freedom Pathway</p>
      </div>
    </footer>
  );
};

export default Footer;