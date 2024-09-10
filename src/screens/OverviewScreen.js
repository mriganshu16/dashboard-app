// OverviewScreen.js
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import './OverviewScreen.css'; // Style for the screen

const OverviewScreen = () => {
  return (
    <div className="overview-container">
      <h1>Welcome to the Phillips Dashboard</h1>
      <div className="dashboard-grid">
        <DashboardCard
          title="Project Progress"
          newTasks={74}
          forecasted={34}
          approved={9}
          chartData={<div>Chart Placeholder</div>} // Replace with chart component
        />
        <DashboardCard
          title="Design Team"
          newTasks={18}
          forecasted={7}
          approved={1}
          chartData={<div>Chart Placeholder</div>}
        />
        {/* Add more DashboardCards here for other teams */}
      </div>
    </div>
  );
};

export default OverviewScreen;
