// DashboardCard.js
import React from 'react';
import './DashboardCard.css'; // Style for individual cards

const DashboardCard = ({ title, newTasks, forecasted, approved, chartData }) => {
  return (
    <div className="dashboard-card">
      <h2>{title}</h2>
      <p>New: {newTasks}</p>
      <p>Forecasted: {forecasted}</p>
      <p>Approved: {approved}</p>
      <div className="chart">
        {/* Render chart using a library like Chart.js */}
        {chartData}
      </div>
    </div>
  );
};

export default DashboardCard;
