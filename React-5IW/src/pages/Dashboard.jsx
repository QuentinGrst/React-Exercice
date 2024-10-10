// src/pages/Dashboard.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
