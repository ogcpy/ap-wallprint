import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoIconPath from "@assets/logo-02.png";

export default function Footer() {
  return (
    <footer className="bg-[#333] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center">
              <div className="bg-white p-2 rounded-lg inline-flex items-center justify-center">
                <img 
                  src={logoIconPath} 
                  alt="AP Wall Print" 
                  className="h-10 sm:h-12"
                />
              </div>
              <div className="ml-3 text-xl sm:text-2xl font-bold">
                <span className="text-white">AP WALLPRINT</span>
              </div>
            </div>
            <p className="mb-4 text-white/80 text-sm sm:text-base">
              Redefining Spaces, One Wall at a Time. Transforming blank walls into breathtaking stories.
            </p>
            <div className="flex space-x-4 mb-6">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-[#00b8ff] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 320 512">
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-white hover:text-[#00b8ff] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-[#00b8ff] transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Home</a></li>
              <li><a href="#portfolio" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Portfolio</a></li>
              <li><a href="#services" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Section */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Custom Wall Art</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Wall Murals</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Branded Environments</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Installation Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#00b8ff] transition text-sm sm:text-base">Design Consultation</a></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">123 Design Street, Creative City, 12345</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">info@apwallprint.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Mon-Fri: 9am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/70">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} AP Wall Print. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
