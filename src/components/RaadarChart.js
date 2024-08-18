import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
Chart.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const RadarChartComponent = () => {
  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <h2>Radar Chart Example</h2>
      <Radar data={data} />
    </div>
  );
};

export default RadarChartComponent;
