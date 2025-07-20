import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">QuoteMood</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 text-sm">
              © 2025 QuoteMood. Spreading positivity one quote at a time.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Made with ❤️ for quote lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;