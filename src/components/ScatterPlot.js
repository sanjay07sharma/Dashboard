import { Scatter } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'Vulnerability Scores',
      data: [
        { x: 100, y: 6 },
        { x: 300, y: 7 },
        { x: 500, y: 8 },
        { x: 700, y: 9 },
        { x: 900, y: 10 },
        
        // more data points as needed
      ],
      backgroundColor: '#8884d8',
    },
  ],
};

export default function ScatterPlotComponent() {
  return (
    <div style={{ width: '400px', height: '400px' }}>
        <Scatter data={data} />
    </div>
  );
}
