import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome back, {user?.fullName}! 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Explore new hobbies, find skill swaps, and connect with others.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🎲</div>
            <h3 className="font-semibold">Hobby Roulette</h3>
            <p className="text-sm text-gray-500">Discover a random hobby</p>
            <Link to="/discover" className="text-purple-600 text-sm underline">Try it</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-semibold">Skill Matches</h3>
            <p className="text-sm text-gray-500">Find people to swap skills</p>
            <Link to="/matches" className="text-purple-600 text-sm underline">View</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-4xl mb-2">🧩</div>
            <h3 className="font-semibold">My Hobbies</h3>
            <p className="text-sm text-gray-500">Manage what you learn/teach</p>
            <Link to="/my-hobbies" className="text-purple-600 text-sm underline">Manage</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;