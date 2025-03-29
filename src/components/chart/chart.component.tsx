
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'My transactions',
        },
    },
};

const labels = ['January', 'February'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Movoments',
            data: [5, 52],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

    ],
};

const Chart = () => {



    return (
        <div style={{ width: '80%', height: '200px' }}>
            <Bar options={options} data={data} />
        </div>
    )



}

export default Chart;