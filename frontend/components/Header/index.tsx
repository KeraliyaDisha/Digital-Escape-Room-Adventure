/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 border border-gray-700 transition-all duration-300 ${
        isScrolled
          ? 'top-0 w-full py-5 rounded-none backdrop-blur-lg bg-white/10'
          : 'top-6 w-[95%] md:w-[90%] py-3 rounded-2xl '
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" className="w-52 h-auto" alt="Logo" />
        </Link>

        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#puzzles" className="text-white text-lg hover:text-indigo-300 transition">
              Puzzles
            </Link>
          </li>
          <li>
            <Link href="#multiplayer" className="text-white text-lg hover:text-indigo-300 transition">
              Multiplayer
            </Link>
          </li>
          <li>
            <Link href="#leaderboard" className="text-white text-lg hover:text-indigo-300 transition">
              Leaderboard
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-white text-lg hover:text-indigo-300 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#profile" className="text-white text-lg hover:text-indigo-300 transition">
              Profile
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded-b-2xl">
          <ul className="px-8 py-5 space-y-5">
            <li>
              <Link href="#puzzles" className="block text-white text-lg hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>
                Puzzles
              </Link>
            </li>
            <li>
              <Link href="#multiplayer" className="block text-white text-lg hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>
                Multiplayer
              </Link>
            </li>
            <li>
              <Link href="#leaderboard" className="block text-white text-lg hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>
                Leaderboard
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block text-white text-lg hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="#profile" className="block text-white text-lg hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
