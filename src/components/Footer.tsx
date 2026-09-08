import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-8 mt-16 border-t-4 border-gold-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-extrabold text-gold-400">
            🌆 CurioCity
          </Link>
          <p className="text-gray-300 text-sm mt-2 max-w-xs">
            Where curiosity finds its people. Discover hobbies, learn new skills, and connect with like-minded friends.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gold-300 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/discover" className="text-gray-300 hover:text-white transition">🎲 Discover</Link></li>
            <li><Link to="/matches" className="text-gray-300 hover:text-white transition">🤝 Matches</Link></li>
            <li><Link to="/my-hobbies" className="text-gray-300 hover:text-white transition">🧩 My Hobbies</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-lg font-semibold text-gold-300 mb-3">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/profile" className="text-gray-300 hover:text-white transition">👤 Profile</Link></li>
            <li><Link to="/swap-inbox" className="text-gray-300 hover:text-white transition">📨 Inbox</Link></li>
            <li><Link to="/login" className="text-gray-300 hover:text-white transition">🔐 Login</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CurioCity – Made with ❤️ by curious minds.
      </div>
    </footer>
  );
};

export default Footer;