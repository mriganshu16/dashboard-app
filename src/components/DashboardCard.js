import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Assuming you're using Chart.js
import './DashboardCard.css'; // Importing CSS for styling

const DashboardCard = ({ title, newTasks, forecasted, approved, chartData }) => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    const data = {
      labels: ['Project A', 'Project B', 'Project C', 'Project D'],
      datasets: [
        {
          label: 'Team 1',
          data: [20, 30, 40, 50],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Team 2',
          data: [30, 35, 40, 45],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Team 3',
          data: [45, 25, 35, 40],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        },
        {
          label: 'Team 4',
          data: [35, 40, 60, 70],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="dashboard-card">
      <h2>{title}</h2>
      <p>New: {newTasks}</p>
      <p>Forecasted: {forecasted}</p>
      <p>Approved: {approved}</p>
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
};

export default DashboardCard;
