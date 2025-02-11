import { addGasto, getGastos } from '../services/gastos';

export default function Dashboard() {
    const dashboard = document.createElement('div');
    dashboard.innerHTML = `
        <h1>Dashboard</h1>
        <form id="gasto-form">
            <input type="text" id="descricao" placeholder="Descrição" required>
            <input type="number" id="valor" placeholder="Valor" required>
            <select id="categoria">
                <option value="Alimentação">Alimentação</option>
                <option value="Transporte">Transporte</option>
                <option value="Lazer">Lazer</option>
            </select>
            <button type="submit">Adicionar Gasto</button>
        </form>
        <ul id="gastos-list"></ul>
    `;

    const gastoForm = dashboard.querySelector('#gasto-form');
    const gastosList = dashboard.querySelector('#gastos-list');

    gastoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const descricao = gastoForm.querySelector('#descricao').value;
        const valor = gastoForm.querySelector('#valor').value;
        const categoria = gastoForm.querySelector('#categoria').value;

        const { error } = await addGasto(descricao, valor, categoria);
        if (!error) {
            loadGastos();
            gastoForm.reset();
        }
    });

    async function loadGastos() {
        const { gastos, error } = await getGastos();
        if (!error) {
            gastosList.innerHTML = gastos.map(gasto => `
                <li>${gasto.descricao} - R$ ${gasto.valor} (${gasto.categoria})</li>
            `).join('');
        }
    }

    loadGastos();
    return dashboard;
}

import { renderChart } from '../components/Chart';

export default function Dashboard() {
    const dashboard = document.createElement('div');
    dashboard.innerHTML = `
        <h1>Dashboard</h1>
        <form id="gasto-form">...</form>
        <ul id="gastos-list"></ul>
        <canvas id="meuGrafico"></canvas>
    `;

    // ... (código anterior)

    renderChart();
    return dashboard;
}