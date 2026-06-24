import { Heart } from 'lucide-react';
import logo from "../assets/logo.png";

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Daily Schedule', href: '#schedule' },
  { name: 'Services', href: '#services' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
  { name: 'Donate', href: '#donate' },
];

const importantLinks = [
  { name: 'SGPC Official', href: '#' },
  { name: 'DSGMC', href: '#' },
  { name: 'Sikh History', href: '#' },
  { name: 'Gurbani Search', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#272979] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-1">
             {/* Logo */}
          <div className="flex items-center py-5">
            <img src={logo} alt="Logo" className="h-14 md:h-16" />
          </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A sacred place of worship, community service, and spiritual upliftment. Open to all, serving all — following the eternal teachings of Sri Guru Granth Sahib Ji.
            </p>
            <div className="flex items-center gap-2 text-saffron-400 text-sm font-medium">
             
              Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-saffron-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-bold mb-3 text-white">Hukamnama</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Daily Hukamnama is read from Sri Guru Granth Sahib Ji every morning at 5:30 AM.
              </p>
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-lg font-bold mb-5 text-white">Visit Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-gray-300 mb-1">Address</p>
                <p>J-Block, Rajouri Garden</p>
                <p>New Delhi - 110027</p>
              </div>
              <div>
                <p className="font-semibold text-gray-300 mb-1">Phone</p>
                <p>+91-11-2541-XXXX</p>
              </div>
              <div>
                <p className="font-semibold text-gray-300 mb-1">Timings</p>
                <p>Open for Darshan: 3 AM - 10 PM</p>
                <p>Langar: Throughout the day</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gurudwara Sri Guru Singh Sabha, Rajouri Garden. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Made by Squarewave Infotech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
