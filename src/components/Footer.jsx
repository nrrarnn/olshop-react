import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-300/5 to-indigo-300/5 rounded-full blur-3xl" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-300/30 rounded-full animate-ping" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main content */}
        <div className="text-center space-y-12">
          
          {/* Brand section */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Stay Connected</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Follow 
              <span className="relative inline-block mx-2">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Our Journey
                </span>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full transform -skew-x-12" />
              </span>
            </h2>
            
            <p className="text-white/70 max-w-md mx-auto">
              Dapatkan update terbaru tentang produk dan promo menarik dari kami
            </p>
          </div>
          
          {/* Social media links */}
          <div className="flex justify-center items-center space-x-6">
            <a 
              href="https://instagram.com/srhnhdi61"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <BsInstagram className="relative z-10 text-2xl text-white group-hover:text-pink-300 transition-colors duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="https://tiktok.com/"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaTiktok className="relative z-10 text-2xl text-white group-hover:text-red-300 transition-colors duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-br from-black/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a 
              href="mailto:contact@sarahshop.com"
              className="group relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MdEmail className="relative z-10 text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
          
          {/* Newsletter signup */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-xl"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            <div className="text-center lg:text-left">
              <p className="text-white/60 text-sm">
                © 2024 SarahShop. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Crafted with ❤️ by ryndev
              </p>
            </div>
            
            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <div className="w-px h-4 bg-white/20" />
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <div className="w-px h-4 bg-white/20" />
              <a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
};

export default Footer;