import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, PieController, ArcElement, Legend as LegendPlugin, Tooltip as TooltipPlugin } from 'chart.js';

ChartJS.register(
  PointElement,
  LineElement,
  PieController,
  ArcElement,
  LegendPlugin,
  TooltipPlugin
);

const Linechart = () => {
  const [chartData, setChartData] = useState({datasets: []});

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        
        datasets: [
            {
                label: 'Sales $',
                data: [1827, 2201, 1490, 1738, 2482, 1842, 2245],
                borderColor: '#6527BE',
                backgroundColor: '#6527BE',
              },
        ],
    })
    
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
        <div className='p-4 bg-white h-[400px] shadow-lg rounded-lg relative overflow-hidden'>
          <Line data={chartData} options={chartOptions} />
        </div>
    </>
  );
};

export default Linechart;
