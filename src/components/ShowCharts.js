import React from 'react';
import BarChartComponent from './BarChart';
import PieChartComponent from './PieChart';
import LineChartComponent from './LineChart';
import RadarChartComponent from './RaadarChart';
import ScatterPlotComponent from './ScatterPlot';
import DonutChartComponent from './DoughnutChart';
import DataWithDonut from './DataWithDonut';

const ShowCharts = () => {
  return (
    <div className='grid grid-cols-2 gap-1 ml-96'>
      <DataWithDonut/>
      <BarChartComponent />
      <PieChartComponent />
      <LineChartComponent />
      <RadarChartComponent />
      <ScatterPlotComponent />
      <DonutChartComponent />
    </div>
  );
};

export default ShowCharts;
