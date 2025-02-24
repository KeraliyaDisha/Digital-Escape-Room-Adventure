/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { CircleUserRound, LogOut} from "lucide-react";
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // Desktop profile dropdown

  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Re-run the token check whenever the route (pathname) changes.
  useEffect(() => {
    const token = Cookies.get("token");
    setIsAuthenticated(!!token);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setShowProfileMenu(false);
    router.push("/");
  };

  // Handle scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 border border-gray-700 transition-all duration-300 ${
        isScrolled
          ? "top-0 w-full py-5 rounded-none backdrop-blur-lg bg-white/10"
          : "top-6 w-[95%] md:w-[90%] py-3 rounded-xl"
      }`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" className="w-28 h-auto" alt="Logo" />
        </Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="#puzzles"
              className="text-white text-[16px] hover:text-[#559196] transition"
            >
              Puzzles
            </Link>
          </li>
          <li>
            <Link
              href="#multiplayer"
              className="text-white text-[16px] hover:text-[#559196] transition"
            >
              Multiplayer
            </Link>
          </li>
          <li>
            <Link
              href="#leaderboard"
              className="text-white text-[16px] hover:text-[#559196] transition"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-white text-[16px] hover:text-[#559196] transition"
            >
              Contact
            </Link>
          </li>
          <li>
            {!isAuthenticated ? (
              <Link
                href="/auth/signin"
                className="bg-[#387478] text-[16px] text-white rounded-lg hover:bg-[#559196] px-5 py-2"
              >
                Login
              </Link>
            ) : (
              <div className="relative inline-block">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center focus:outline-none"
                >
                  <CircleUserRound
                    size={27}
                    className="text-[#387478] hover:text-[#559196]"
                  />
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#387478] text-white rounded shadow-lg">
                    {/* Dropdown header: Profile icon on left and username on right */}
                    <div className="flex items-center px-4 py-2 border-b border-gray-200">
                      <CircleUserRound size={24} className="mr-2" />
                      <span className="font-medium">John Doe</span>
                    </div>
                    {/* Logout option with icon on left */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 hover:bg-[#559196] "
                    >
                      <LogOut size={18} className="mr-2" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded-b-2xl">
          <ul className="px-8 py-5 space-y-5">
            <li>
              <Link
                href="#puzzles"
                className="block text-white text-lg hover:text-[#559196] transition"
                onClick={() => setIsOpen(false)}
              >
                Puzzles
              </Link>
            </li>
            <li>
              <Link
                href="#multiplayer"
                className="block text-white text-lg hover:text-[#559196] transition"
                onClick={() => setIsOpen(false)}
              >
                Multiplayer
              </Link>
            </li>
            <li>
              <Link
                href="#leaderboard"
                className="block text-white text-lg hover:text-[#559196] transition"
                onClick={() => setIsOpen(false)}
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-white text-lg hover:text-[#559196] transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              {!isAuthenticated ? (
                <Link
                  href="/auth/signin"
                  className="block text-white text-lg hover:text-[#559196] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block text-white text-lg hover:text-[#559196] transition"
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
