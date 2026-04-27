import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ToolTip,
    Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ToolTip,
    Legend
)

export default function GraficoBarra(){
    return()
}