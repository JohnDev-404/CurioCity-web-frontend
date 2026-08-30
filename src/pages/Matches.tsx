import { useEffect, useState } from 'react';
import api from '../api/axios';

const Matches = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await api.get('/hobbies/matches');
        setMatches(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  const sendSwapRequest = async (targetUserId: string, offeringHobbyId: string, requestingHobbyId: string) => {
    try {
      await api.post('/hobbies/swap-request', {
        targetUserId,
        offeringHobbyId,
        requestingHobbyId,
        message: 'Hey! I saw we could swap skills. Let\'s connect!'
      });
      alert('Swap request sent!');
    } catch (err) {
      alert('Failed to send request');
    }
  };

  if (loading) return <div className="text-center mt-10">Finding your matches...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">🤝 Skill Swap Matches</h2>
      {matches.length === 0 ? (
        <p className="text-gray-600">No matches yet. Add more hobbies to find people!</p>
      ) : (
        <div className="grid gap-4">
          {matches.map((match) => (
            <div key={match.userId} className="border p-4 rounded-lg shadow-sm bg-white flex justify-between items-center">
              <div>
                <p className="font-semibold">{match.fullName}</p>
                <p className="text-sm text-gray-600">
                  Teaches: <span className="font-medium">{match.teaches}</span> &nbsp;|&nbsp; Wants to learn: <span className="font-medium">{match.wantsToLearn}</span>
                </p>
              </div>
              <button
                onClick={() => sendSwapRequest(match.userId, match.teachHobbyId, match.learnHobbyId)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm"
              >
                Swap Skills
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;