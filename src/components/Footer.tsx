import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/team" className="hover:underline">Team</Link></li>
            <li><Link to="/news" className="hover:underline">News</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/terrorism" className="hover:underline">Terrorism</Link></li>
            <li><Link to="/category/technology" className="hover:underline">Technology</Link></li>
            <li><Link to="/category/defense" className="hover:underline">Defense</Link></li>
            <li><Link to="/category/politics" className="hover:underline">Politics</Link></li>
            <li><Link to="/category/world" className="hover:underline">World News</Link></li>
          </ul>
        </div>

        {/* Social Media & Copyright */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500"><FaLinkedinIn /></a>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CESCube. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
