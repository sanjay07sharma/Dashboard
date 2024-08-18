import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChartComponent = () => {
  const data = {
    labels: ['01 May', '06 May', '11 May', '16 May', '21 May', '26 May'],
    datasets: [
      {
        label: 'Security KPI',
        data: [1000, 1000, 800, 200, 150, 100],
        fill: false,
        backgroundColor: '#8884d8',
        borderColor: '#8884d8',
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <h2>Line Chart Example</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChartComponent;
