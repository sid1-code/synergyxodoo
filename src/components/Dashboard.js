import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="btn btn-secondary"
          style={{ width: 'auto', padding: '10px 20px' }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Welcome, {user?.name || 'User'}!</h3>
          <p>
            You have successfully logged into your account. This is your personal dashboard 
            where you can manage your profile, view your data, and access all the features 
            of the application.
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Account Information</h3>
          <p>
            <strong>Email:</strong> {user?.email || 'Not available'}<br />
            <strong>User ID:</strong> {user?.id || 'Not available'}<br />
            <strong>Status:</strong> Active
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <p>
            Here you can add quick action buttons for common tasks like:
          </p>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Update Profile</li>
            <li>Change Password</li>
            <li>View Settings</li>
            <li>Export Data</li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <p>
            Your recent activity and notifications will appear here. This could include:
          </p>
          <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
            <li>Login history</li>
            <li>Profile updates</li>
            <li>System notifications</li>
            <li>Important alerts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
