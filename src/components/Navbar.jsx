import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const links = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/80 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black"
        >
          <span className="text-pink-600">H</span>D
        </motion.h1>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">

          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-70}
              activeClass="text-pink-600"
              className="cursor-pointer font-medium hover:text-pink-600 transition"
            >
              {item.name}
            </Link>
          ))}

        </nav>

      
        {/* Mobile */}

        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-3xl"
        >
          {nav ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden bg-white transition-all overflow-hidden ${
          nav ? "max-h-96" : "max-h-0"
        }`}
      >
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth
            duration={600}
            offset={-70}
            onClick={() => setNav(false)}
            className="block px-8 py-5 border-b cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}