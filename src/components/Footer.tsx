import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/board"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Board of Advisors
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/emerging"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Strategic Foresight & Scenario Planning
              </Link>
            </li>
            <li>
              <Link
                to="/disruptive"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Disrupting & Emerging Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/hybrid"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Hybrid Warfare & Irregular Conflicts
              </Link>
            </li>
            <li>
              <Link
                to="/economic"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:underline hover:text-blue-400"
              >
                Economic & Resource Warfare
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Email & Copyright */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
            Contact Us
          </h3>
          <p className="text-sm mb-2">
            For inquiries, reach out at:{" "}
            <a
              href="mailto:Contact@cnaws.in"
              className="text-blue-400 hover:underline"
            >
              Contact@cnaws.in
            </a>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-4">
            &copy; {new Date().getFullYear()} <span className="font-semibold">CESCube</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
