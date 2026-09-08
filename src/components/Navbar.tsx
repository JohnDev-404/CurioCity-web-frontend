import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { FaBars, FaTimes, FaCompass, FaHandshake, FaPuzzlePiece, FaEnvelope, FaUser, FaSignOutAlt, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // ----- NAV LINKS (clean config) -----
  const navLinks = user ? [
    { to: '/discover', icon: <FaCompass />, label: 'Discover' },
    { to: '/matches', icon: <FaHandshake />, label: 'Matches' },
    { to: '/my-hobbies', icon: <FaPuzzlePiece />, label: 'My Hobbies' },
    { to: '/swap-inbox', icon: <FaEnvelope />, label: 'Inbox' },
    { to: '/profile', icon: <FaUser />, label: 'Profile' },
  ] : [];

  return (
    <nav className="bg-cream-50/90 backdrop-blur-xl sticky top-0 z-50 border-b-2 border-cream-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* ---------- LOGO (Now with personality) ---------- */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">🌆</span>
          <span className="text-2xl font-black tracking-tight text-primary-900">
            Curio<span className="text-terracotta-500">City</span>
          </span>
          <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-gold-500 bg-gold-100 px-2 py-0.5 rounded-full border border-gold-300 ml-1">
            Beta
          </span>
        </Link>

        {/* ---------- DESKTOP NAV (hidden on mobile) ---------- */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary-700 text-sm font-medium transition-all duration-200 relative group"
                >
                  <span className="text-primary-500 group-hover:text-terracotta-500 transition-colors">
                    {link.icon}
                  </span>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-terracotta-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              ))}

              {/* User Badge + Logout */}
              <div className="flex items-center gap-3 pl-4 border-l-2 border-cream-200">
                <span className="text-sm font-medium text-primary-900 bg-cream-100 px-3 py-1 rounded-full border border-cream-200">
                  👋 {user.fullName?.split(' ')[0] || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-terracotta-600 transition-colors group font-medium"
                >
                  <FaSignOutAlt className="group-hover:translate-x-0.5 transition-transform" />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-primary-700 text-sm font-medium transition-colors relative group"
              >
                Log In
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-terracotta-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
              <Link
                to="/signup"
                className="btn-primary py-2 px-5 text-sm shadow-md hover:shadow-lg flex items-center gap-1.5"
              >
                <FaPlus className="text-xs" /> Sign Up
              </Link>
            </>
          )}
        </div>

        {/* ---------- MOBILE HAMBURGER BUTTON ---------- */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-primary-900 text-2xl p-1 hover:bg-cream-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ---------- MOBILE MENU DROPDOWN ---------- */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/95 backdrop-blur-lg border-t-2 border-cream-200/80 px-4 py-4 shadow-lg animate-slide-down">
          <div className="flex flex-col gap-3">
            {user ? (
              <>
                {/* User greeting */}
                <div className="text-sm font-medium text-primary-900 bg-cream-100 px-3 py-2 rounded-lg border border-cream-200 mb-1">
                  👋 Hey, {user.fullName?.split(' ')[0] || 'User'}!
                </div>

                {/* Nav links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-gray-700 hover:text-primary-700 hover:bg-cream-100 px-3 py-2.5 rounded-lg transition-all text-sm font-medium"
                  >
                    <span className="text-primary-500 text-lg w-6 text-center">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}

                {/* Divider */}
                <div className="border-t border-cream-200 my-1"></div>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 text-gray-500 hover:text-terracotta-600 px-3 py-2.5 rounded-lg transition-all text-sm font-medium hover:bg-cream-100"
                >
                  <FaSignOutAlt className="text-lg w-6 text-center" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-primary-700 hover:bg-cream-100 px-3 py-2.5 rounded-lg transition-all text-sm font-medium"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary text-center py-2.5 px-4 text-sm"
                >
                  Sign Up – It's Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;