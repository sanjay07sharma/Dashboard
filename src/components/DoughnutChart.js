import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Critical', 'High', 'Medium', 'Low'],
  datasets: [
    {
      data: [333, 3000, 7000, 6000],
      backgroundColor: ['#FF0000', '#FF8C00', '#FFD700', '#00C49F'],
      hoverBackgroundColor: ['#FF6347', '#FFA500', '#FFFF00', '#20B2AA'],
    },
  ],
};

export default function DonutChartComponent() {
  return(
    <div style={{ width: '400px', height: '400px' }}>
        <Doughnut data={data} />
    </div>
    );
}
