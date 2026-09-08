import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white border-t-4 border-gold-400/30 mt-0 mb-0" > 
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-extrabold text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
              <span className="group-hover:rotate-12 transition-transform duration-500">🌆</span>
              Curio<span className="text-terracotta-400">City</span>
            </Link>
            <p className="text-gray-400 text-sm mt-2 max-w-xs leading-relaxed">
              Where curiosity finds its people. Discover hobbies, learn new skills, 
              and connect with like-minded friends from around the world.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs bg-primary-800/50 px-3 py-1 rounded-full border border-primary-700 text-gray-300">
                🧠 200+ Hobbies
              </span>
              <span className="text-xs bg-primary-800/50 px-3 py-1 rounded-full border border-primary-700 text-gray-300">
                🌍 50+ Countries
              </span>
              <span className="text-xs bg-primary-800/50 px-3 py-1 rounded-full border border-primary-700 text-gray-300">
                🤝 1k+ Swaps
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/discover" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">🎲</span>
                  Discover
                </Link>
              </li>
              <li>
                <Link to="/matches" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">🤝</span>
                  Matches
                </Link>
              </li>
              <li>
                <Link to="/my-hobbies" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">🧩</span>
                  My Hobbies
                </Link>
              </li>
              <li>
                <Link to="/swap-inbox" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">📨</span>
                  Inbox
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              Community
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">👤</span>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">✨</span>
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2 group">
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">🔐</span>
                  Sign In
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-xs text-gray-500">Beta v0.1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800/60 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            © {currentYear} CurioCity – Made with <span className="text-terracotta-400">❤️</span> by curious minds.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gold-300 transition-colors">Privacy</Link>
            <span className="w-px h-4 bg-primary-800"></span>
            <Link to="/terms" className="hover:text-gold-300 transition-colors">Terms</Link>
            <span className="w-px h-4 bg-primary-800"></span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              All systems go
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;