import { Newspaper, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="bg-news-light dark:bg-gray-900 border-b border-news-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-news-primary" />
            <span className="text-xl font-bold text-news-dark dark:text-white">CNAWS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {/* Who Are We */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-sm font-medium text-news-dark dark:text-white hover:text-news-primary cursor-pointer">
                Who Are We
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border border-news-border shadow-md rounded-md z-50 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/about" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">About</Link>
                <Link to="/team" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Team</Link>
                <Link to="/board" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Board of Advisor</Link>
              </div>
            </div>

            {/* Department Desk */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-sm font-medium text-news-dark dark:text-white hover:text-news-primary cursor-pointer">
                Department Desk
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border border-news-border shadow-md rounded-md z-50 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/emerging" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Emerging Technologies</Link>
                <Link to="/disruptive" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Disruptive Defence Tech</Link>
                <Link to="/hybrid" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Hybrid Warfare in Conflicts</Link>
                <Link to="/economic-social" className="block px-4 py-2 text-sm hover:bg-news-light hover:text-news-primary">Economic & Social Warfare</Link>
              </div>
            </div>

            <Link to="/politics" className={`text-sm font-medium transition-colors hover:text-news-primary ${isActive("/politics") ? "text-news-primary border-b-2 border-news-primary" : "text-news-dark dark:text-white"}`}>Strategic Foreside and Scenario Planning</Link>
            <Link to="/business" className={`text-sm font-medium transition-colors hover:text-news-primary ${isActive("/business") ? "text-news-primary border-b-2 border-news-primary" : "text-news-dark dark:text-white"}`}>Maximum Academic</Link>
            <Link to="/technology" className={`text-sm font-medium transition-colors hover:text-news-primary ${isActive("/technology") ? "text-news-primary border-b-2 border-news-primary" : "text-news-dark dark:text-white"}`}>Research</Link>
            <Link to="/sports" className={`text-sm font-medium transition-colors hover:text-news-primary ${isActive("/sports") ? "text-news-primary border-b-2 border-news-primary" : "text-news-dark dark:text-white"}`}>Courses</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors hover:text-news-primary ${isActive("/contact") ? "text-news-primary border-b-2 border-news-primary" : "text-news-dark dark:text-white"}`}>Contact</Link>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 text-news-dark dark:text-white hover:text-news-primary">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-news-dark dark:text-white" /> : <Menu className="h-6 w-6 text-news-dark dark:text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-news-border space-y-2">
            <Link to="/about" className="block px-4 py-2 text-sm hover:text-news-primary">About</Link>
            <Link to="/team" className="block px-4 py-2 text-sm hover:text-news-primary">Team</Link>
            <Link to="/board" className="block px-4 py-2 text-sm hover:text-news-primary">Board of Advisor</Link>
            <Link to="/emerging" className="block px-4 py-2 text-sm hover:text-news-primary">Emerging Technologies</Link>
            <Link to="/disruptive" className="block px-4 py-2 text-sm hover:text-news-primary">Disruptive Defence Tech</Link>
            <Link to="/hybrid" className="block px-4 py-2 text-sm hover:text-news-primary">Hybrid Warfare in Conflicts</Link>
            <Link to="/economic-social" className="block px-4 py-2 text-sm hover:text-news-primary">Economic & Social Warfare</Link>
            <Link to="/politics" className="block px-4 py-2 text-sm hover:text-news-primary">Strategic Foreside and Scenario Planning</Link>
            <Link to="/business" className="block px-4 py-2 text-sm hover:text-news-primary">Maximum Academic</Link>
            <Link to="/technology" className="block px-4 py-2 text-sm hover:text-news-primary">Research</Link>
            <Link to="/sports" className="block px-4 py-2 text-sm hover:text-news-primary">Courses</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm hover:text-news-primary">Contact</Link>
            {/* Dark Mode Toggle in Mobile */}
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-4 py-2 text-sm flex items-center gap-2 text-news-dark dark:text-white hover:text-news-primary">
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
