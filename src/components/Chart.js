import Chart from 'chart.js/auto';
import { getGastos } from '../services/gastos';

export async function renderChart() {
    const { gastos } = await getGastos();
    const categorias = [...new Set(gastos.map(g => g.categoria))];
    const valores = categorias.map(cat => 
        gastos.filter(g => g.categoria === cat).reduce((sum, g) => sum + g.valor, 0)
    );

    const ctx = document.getElementById('meuGrafico').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categorias,
            datasets: [{
                label: 'Gastos por Categoria',
                data: valores,
                backgroundColor: ['red', 'blue', 'green'],
            }]
        }
    });
}