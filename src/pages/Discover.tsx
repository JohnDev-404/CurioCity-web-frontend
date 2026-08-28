import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../contexts/AuthContext';

const Discover = () => {
  const { user } = useAuth();
  const [hobby, setHobby] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchRoulette = async () => {
    setLoading(true);
    try {
      const res = await api.get('/hobbies/roulette');
      setHobby(res.data);
      setMessage('');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'No more hobbies!');
      setHobby(null);
    } finally {
      setLoading(false);
    }
  };

  const addHobby = async (type: 'learn' | 'teach') => {
    if (!hobby) return;
    try {
      await api.post('/hobbies/user-hobbies', {
        hobbyId: hobby._id,
        type,
        level: 'beginner'
      });
      alert(`Added "${hobby.name}" to your ${type} list!`);
      fetchRoulette(); // Get next hobby
    } catch (err) {
      alert('Failed to add hobby');
    }
  };

  useEffect(() => {
    fetchRoulette();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded text-center">
      <h2 className="text-3xl font-bold mb-2">🎲 Hobby Roulette</h2>
      <p className="text-gray-600 mb-6">Discover a new passion!</p>

      {loading && <p>Spinning the wheel...</p>}

      {message && <p className="text-yellow-600">{message}</p>}

      {hobby && (
        <div className="border p-6 rounded-lg bg-gray-50">
          <div className="text-6xl mb-3">{hobby.icon}</div>
          <h3 className="text-2xl font-semibold">{hobby.name}</h3>
          <p className="text-gray-700 mt-2">{hobby.description}</p>
          <p className="text-sm text-gray-500 mt-1">Category: {hobby.category}</p>
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={() => addHobby('learn')}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              I want to learn this
            </button>
            <button
              onClick={() => addHobby('teach')}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              I can teach this
            </button>
          </div>
        </div>
      )}

      <button
        onClick={fetchRoulette}
        className="mt-6 text-blue-600 underline"
      >
        Skip → Next hobby
      </button>
    </div>
  );
};

export default Discover;