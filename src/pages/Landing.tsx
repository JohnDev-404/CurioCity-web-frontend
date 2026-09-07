import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Landing = () => {
  const { user } = useAuth();

  const features = [
    { icon: '🎲', title: 'Hobby Roulette', desc: 'Discover random hobbies you never knew you’d love.' },
    { icon: '🤝', title: 'Skill Swap', desc: 'Find people to teach and learn from – exchange skills for free.' },
    { icon: '🧩', title: 'My Hobbies', desc: 'Track what you’re learning or teaching in one place.' },
    { icon: '📨', title: 'Swap Inbox', desc: 'Manage all your skill‑swap requests with ease.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar (reuse your existing Navbar component) */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Where <span className="text-primary-600">Curiosity</span> Finds Its People
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Discover hobbies, learn new skills, and connect with like‑minded friends – all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {user ? (
              <Link to="/dashboard" className="btn-primary">
                Go to Dashboard →
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn-primary">
                  Get Started – It’s Free
                </Link>
                <Link to="/login" className="btn-secondary">
                  Sign In
                </Link>
              </>
            )}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-1">✅ 150+ Hobbies</span>
            <span className="flex items-center gap-1">✅ 500+ Skill Swaps</span>
            <span className="flex items-center gap-1">✅ 1000+ Users</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why CurioCity?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="card text-center hover:scale-105 transition-transform duration-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} CurioCity – Made with ❤️ for curious minds.</p>
        </div>
      </footer>
    </div>
  );
};

// Need to import Navbar at the top
import Navbar from '../components/Navbar';
export default Landing;