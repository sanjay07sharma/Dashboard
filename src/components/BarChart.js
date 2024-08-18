import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChartComponent = () => {
  const data = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: [198, 328, 416],
        backgroundColor: ['#00C49F', '#FFD700', '#FF8C00'],
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <h2>Bar Chart Example</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChartComponent;
