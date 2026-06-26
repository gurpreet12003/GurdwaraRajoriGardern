import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "About GSGSS",
    dropdown: [
      { name: "About Gurudwara", href: "#about" },
      { name: "Gurudwara Committee", href: "#committee" },
    ],
  },

  {
    name: "Educational Institute",
    dropdown: [
      { name: "GNIAT", href: "#gniat" },
      { name: "GHPS School", href: "#ghps" },
    ],
  },

  {
    name: "Booking",
    dropdown: [
      { name: "Community Hall", href: "#hall" },
      { name: "Anand Karaj", href: "#seva" },
      { name: "Naam Karan", href: "#seva" },
      { name: "Akhand Path", href: "#seva" },
      { name: "Kirtan Seva", href: "#seva" },
      { name: "Sarai Accommodation", href: "#sarai" },
    ],
  },
  {
    name: "Sangat Services",
    dropdown: [
      { name: "Dispensary", href: "/dispansary" },
      { name: "Medical Camps", href: "#medical" },
      { name: "Punjabi & Gurbani Classes", href: "#classes" },
    ],
  },
  { name: "Events", href: "/#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#272979] backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 text-white hover:text-[#FF8000]">
                    {link.name}
                  </button>

                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((item) =>
                      item.href.includes("#") ? (
                        <HashLink
                          smooth
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {item.name}
                        </HashLink>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : link.href.includes("#") ? (
                <HashLink
                  smooth
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#FF8000]"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:text-[#FF8000]"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 text-[#FF8000]`
            }
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 rounded-lg font-medium"
                >
                  <span>{link.name}</span>

                  <span className="text-lg font-bold">
                    {openDropdown === link.name ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openDropdown === link.name
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="ml-4 border-l border-gray-200">
                    {link.dropdown.map((item) =>
                      item.href.includes("#") ? (
                        <HashLink
                          smooth
                          key={item.name}
                          to={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-3 text-gray-600 hover:text-orange-600"
                        >
                          {item.name}
                        </HashLink>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-3 text-gray-600 hover:text-orange-600"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : link.href.includes("#") ? (
              <HashLink
                smooth
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium"
              >
                {link.name}
              </HashLink>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}