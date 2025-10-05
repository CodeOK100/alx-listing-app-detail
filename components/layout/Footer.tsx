import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} ALX Listing. All rights reserved</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Services</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;