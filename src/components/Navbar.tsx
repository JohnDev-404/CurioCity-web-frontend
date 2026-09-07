import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap">
        <Link to="/" className="text-2xl font-extrabold text-primary-600">
          🌆 CurioCity
        </Link>

        <div className="flex items-center gap-4 flex-wrap">
          {user ? (
            <>
              <Link to="/discover" className="text-gray-700 hover:text-primary-600 transition">🎲 Discover</Link>
              <Link to="/matches" className="text-gray-700 hover:text-primary-600 transition">🤝 Matches</Link>
              <Link to="/my-hobbies" className="text-gray-700 hover:text-primary-600 transition">🧩 My Hobbies</Link>
              <Link to="/swap-inbox" className="text-gray-700 hover:text-primary-600 transition">📨 Inbox</Link>
              <Link to="/profile" className="text-gray-700 hover:text-primary-600 transition">👤 Profile</Link>
              <span className="text-sm text-gray-500 hidden sm:inline">{user.fullName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 hover:text-primary-600 transition">Log In</Link>
              <Link to="/signup" className="btn-primary py-1.5 px-4 text-sm">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;