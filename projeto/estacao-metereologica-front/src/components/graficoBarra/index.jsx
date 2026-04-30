import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    plugins
} from "chart.js";
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function GraficoBarra(){
    const opcoes = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Medidas de temperatrura por mês'
            }
        },
    }

    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const dados = {
        labels, datasets: [
            {
                label: 'Chuva (mm)',
                data: labels.map(() => faker.number.int({min: 0, max: 500})),
                backgroundColor: '#00a949'
            },

            {
                label: 'Temperatura (°C)',
                data: labels.map(() => faker.number.int({min: 0, max: 50})),
                backgroundColor: '#c4140b'
            }
        ]
    }

    return(
        <Bar options = {opcoes} data = {dados}/>
    )
}