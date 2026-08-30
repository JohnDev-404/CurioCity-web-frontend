import { useEffect, useState } from 'react';
import api from '../api/axios';

const MyHobbies = () => {
  const [learnHobbies, setLearnHobbies] = useState<any[]>([]);
  const [teachHobbies, setTeachHobbies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHobbies = async () => {
    try {
      const res = await api.get('/hobbies/my-hobbies');
      const learn = res.data.filter((h: any) => h.type === 'learn');
      const teach = res.data.filter((h: any) => h.type === 'teach');
      setLearnHobbies(learn);
      setTeachHobbies(teach);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeHobby = async (userHobbyId: string) => {
    if (!confirm('Remove this hobby from your list?')) return;
    try {
      await api.delete(`/hobbies/user-hobbies/${userHobbyId}`);
      fetchHobbies(); // Refresh the list
    } catch (err) {
      alert('Failed to remove');
    }
  };

  useEffect(() => {
    fetchHobbies();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading your hobbies...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">🧩 My Hobbies</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Learning Column */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-600">📖 Learning</h3>
          {learnHobbies.length === 0 ? (
            <p className="text-gray-500 text-sm">You're not learning anything yet. Spin the roulette!</p>
          ) : (
            <ul className="space-y-2">
              {learnHobbies.map((item) => (
                <li key={item._id} className="bg-white p-3 rounded shadow-sm border flex justify-between items-center">
                  <div>
                    <span className="text-lg mr-2">{item.hobbyId?.icon || '🎯'}</span>
                    <span>{item.hobbyId?.name || 'Unknown'}</span>
                    <span className="text-xs text-gray-500 ml-2">({item.level})</span>
                  </div>
                  <button
                    onClick={() => removeHobby(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Teaching Column */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-green-600">🎓 Teaching</h3>
          {teachHobbies.length === 0 ? (
            <p className="text-gray-500 text-sm">You're not teaching anything yet. Share your skills!</p>
          ) : (
            <ul className="space-y-2">
              {teachHobbies.map((item) => (
                <li key={item._id} className="bg-white p-3 rounded shadow-sm border flex justify-between items-center">
                  <div>
                    <span className="text-lg mr-2">{item.hobbyId?.icon || '🎯'}</span>
                    <span>{item.hobbyId?.name || 'Unknown'}</span>
                    <span className="text-xs text-gray-500 ml-2">({item.level})</span>
                  </div>
                  <button
                    onClick={() => removeHobby(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a href="/discover" className="text-blue-600 underline">🎲 Find more hobbies</a>
      </div>
    </div>
  );
};

export default MyHobbies;