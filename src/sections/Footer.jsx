import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Feature</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Others</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Start Triefing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Earn Free Crypto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crypto Wallet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payment Option</a></li>
            </ul>
          </div>

   
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Download App</h3>

            <div className="flex flex-col space-y-3">

              <button className="w-2/3 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 cursor-pointer text-black py-1 px-1 rounded-lg transition-colors">
                <FaGooglePlay className="text-4xl" />
                <span className="text-left font-semibold">Get it on <br /><span className="text-lg font-bold">Google Play</span></span>
              </button>
              <button className="w-2/3 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 cursor-pointer text-black py-1 px-1 rounded-lg transition-colors">
                <FaApple className="text-4xl" />
                <span className="text-left font-semibold">Get it on <br /><span className="text-lg font-bold">App Store</span></span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright 2024, all right reserves for repurchase
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;