import { Newspaper, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/logowhite.png";
import logoDark from "@/assets/logoblack.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Hide header on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) setHidden(true);
      else setHidden(false);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const desktopMenus = [
    {
      title: "Who Are We",
      links: [
        { label: "About", path: "/about" },
        { label: "Core Team", path: "/core-team" },
        { label: "Team", path: "/team" },
        { label: "Board of Advisors", path: "/board" },
      ],
    },
    {
      title: "Departments Desk",
      links: [
        { label: "Hybrid Warfare & Irregular Conflict", path: "/hybrid" },
        { label: "Disruptive & Emerging Technologies", path: "/disruptive" },
        { label: "Economic & Resource Warfare", path: "/economic" },
        { label: "Strategic Foresight & Scenario Planning", path: "/emerging" },
        { label: "Intelligence Gathering & Analysis", path: "/gathering" },
      ],
    },
    {
      title: "Conflict Map",
      links: [
        {
          label: "Proposed Terrorism Incident Database Fields (J&K)",
          path: "/terrorism-database-jk",
        },
        {
          label: "Proposed Terrorism Incident Database Fields (Pakistan)",
          path: "/terrorism-database-pakistan",
        },
        {
          label: "Pakistan Militancy Dashboard",
          path: "/map",
        },
      ],
    },
  ];

  const simpleLinks = [
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-900/90
        border-b border-news-border dark:border-none shadow-md
        transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={darkMode ? logoLight : logoDark}
              alt="CNAWS Logo"
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mx-auto">
            {desktopMenus.map((menu, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-center gap-1 text-sm font-medium text-news-dark dark:text-white hover:text-news-primary cursor-pointer transition-colors duration-200">
                  {menu.title} <ChevronDown className="w-4 h-4" />
                </div>

                {/* Dropdown */}
                <div className="absolute left-0 mt-2 bg-white dark:bg-gray-900 border border-gray-700 dark:border-gray-800 shadow-xl rounded-md z-50 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {menu.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-news-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-news-primary transition-all duration-200 rounded-md"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-news-primary hover:scale-105 ${
                  isActive(link.path)
                    ? "text-news-primary border-b-2 border-news-primary"
                    : "text-news-dark dark:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:block ml-4 p-2 rounded-full hover:bg-news-primary/20 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-news-primary/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-news-dark dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-news-dark dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden py-4 border-t border-news-border space-y-2 bg-white dark:bg-gray-900"
          >
            {desktopMenus.map((menu) => (
              <div key={menu.title} className="space-y-1">
                <button
                  className="w-full flex justify-between items-center px-4 py-2 text-sm font-medium text-news-dark dark:text-white hover:text-news-primary transition-colors"
                  onClick={() =>
                    setOpenSubMenu(openSubMenu === menu.title ? null : menu.title)
                  }
                >
                  {menu.title}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      openSubMenu === menu.title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSubMenu === menu.title &&
                  menu.links.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-6 py-2 text-sm text-news-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-news-primary rounded-md transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-sm text-news-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-news-primary rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full px-4 py-2 text-sm flex items-center gap-2 text-news-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-news-primary rounded-md transition-all duration-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
