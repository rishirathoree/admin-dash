import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, PieController, ArcElement, Legend as LegendPlugin, Tooltip as TooltipPlugin } from 'chart.js';

ChartJS.register(
  PointElement,
  LineElement,
  PieController,
  ArcElement,
  LegendPlugin,
  TooltipPlugin
);

const Piechart = () => {
  const [chartData, setChartData] = useState({datasets: []});

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', ],
        datasets: [
            {
                label: 'Sales $',
                data: [1827, 2201, 1490],
                boxShadow:'2px 0px 15px 1px rgba(181,181,181,0.11)',
                borderColor: 'rgba(255,255,255)',
                border:'1px',
                backgroundColor: [
                    'rgb(86, 226, 177)',
                    'rgb(18, 148, 168)',
                    'rgb(248, 207, 89)',
                    'rgb(164, 123, 179)',
                    'rgb(113, 193, 230)',
                    'rgb(241, 109, 123)',
                  ],
              }, 
        ]
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
          <Pie data={chartData} options={chartOptions} />
        </div>
    </>
  );
};

export default Piechart;
