import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/emerging"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Strategic Foresight & Scenario Planning
              </Link>
            </li>
            <li>
              <Link
                to="/disruptive"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Disrupting & Emerging Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/hybrid"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Hybrid Warfare & Irregular Conflicts
              </Link>
            </li>
            <li>
              <Link
                to="/economic"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline"
              >
                Economic & Resource Warfare
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Connect With Us
          </h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 text-lg"><FaTwitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 text-lg"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 text-lg"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 text-lg"><FaLinkedinIn /></a>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            &copy; {new Date().getFullYear()} <span className="font-semibold">CESCube</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
