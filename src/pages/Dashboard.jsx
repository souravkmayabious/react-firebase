import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      {user ? (
        <div>
          <h2>Welcome {user.displayName || user.email}</h2>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
