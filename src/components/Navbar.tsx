import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-wrap items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-purple-600">
        🌆 CurioCity
      </Link>

      <div className="flex items-center gap-4 flex-wrap">
        <Link to="/discover" className="text-gray-700 hover:text-purple-600">
          🎲 Discover
        </Link>
        <Link to="/matches" className="text-gray-700 hover:text-purple-600">
          🤝 Matches
        </Link>
        <Link to="/my-hobbies" className="text-gray-700 hover:text-purple-600">
          🧩 My Hobbies
        </Link>
        <Link to="/swap-inbox" className="text-gray-700 hover:text-purple-600">
          📨 Inbox
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-purple-600">
          👤 Profile
        </Link>

        {user && (
          <span className="text-sm text-gray-500 hidden sm:inline">
            {user.fullName}
          </span>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;