import { useEffect, useState } from 'react';
import api from '../api/axios';

const SwapInbox = () => {
  const [incoming, setIncoming] = useState<any[]>([]);
  const [outgoing, setOutgoing] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await api.get('/hobbies/swap-requests');
      setIncoming(res.data.incoming);
      setOutgoing(res.data.outgoing);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = async (swapId: string, status: 'accepted' | 'rejected') => {
    try {
      await api.put(`/hobbies/swap-requests/${swapId}`, { status });
      fetchRequests(); // Refresh
    } catch (err) {
      alert('Failed to update request');
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading swaps...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-6">📨 Swap Inbox</h2>

      {/* Incoming */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 text-purple-600">⬇️ Incoming Requests</h3>
        {incoming.length === 0 ? (
          <p className="text-gray-500 text-sm">No incoming requests.</p>
        ) : (
          <ul className="space-y-3">
            {incoming.map((req) => (
              <li key={req._id} className="bg-white p-4 rounded shadow-sm border">
                <p className="font-medium">{req.requesterId?.fullName}</p>
                <p className="text-sm text-gray-600">
                  wants to learn <strong>{req.requestingHobbyId?.name}</strong> from you,
                  and offers to teach <strong>{req.offeringHobbyId?.name}</strong>.
                </p>
                {req.message && <p className="text-sm text-gray-500 mt-1">💬 {req.message}</p>}
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleResponse(req._id, 'accepted')}
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleResponse(req._id, 'rejected')}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Outgoing */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-blue-600">⬆️ Outgoing Requests</h3>
        {outgoing.length === 0 ? (
          <p className="text-gray-500 text-sm">You haven't sent any swap requests.</p>
        ) : (
          <ul className="space-y-3">
            {outgoing.map((req) => (
              <li key={req._id} className="bg-gray-50 p-4 rounded shadow-sm border">
                <p className="font-medium">To: {req.targetUserId?.fullName}</p>
                <p className="text-sm text-gray-600">
                  You offered <strong>{req.offeringHobbyId?.name}</strong> to learn <strong>{req.requestingHobbyId?.name}</strong>.
                </p>
                <span className={`text-sm font-medium mt-2 inline-block
                  ${req.status === 'pending' ? 'text-yellow-600' : ''}
                  ${req.status === 'accepted' ? 'text-green-600' : ''}
                  ${req.status === 'rejected' ? 'text-red-600' : ''}
                `}>
                  Status: {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SwapInbox;