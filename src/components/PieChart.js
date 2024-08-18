import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Title, Tooltip, Legend);

const PieChartComponent = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderRadius: 10, // Set the border radius for the pie slices
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Disable aspect ratio to set custom width/height
  };

  return (
    <div className='w-[50%]'>
      <h2>Pie Chart Example</h2>
      <div style={{ width: '400px', height: '400px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
