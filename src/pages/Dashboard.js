import { addGasto, getGastos, deleteGasto } from '../services/gastos';
import { renderChart } from '../components/Chart';

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
        <canvas id="meuGrafico"></canvas>
    `;

    const gastoForm = dashboard.querySelector('#gasto-form');
    const gastosList = dashboard.querySelector('#gastos-list');

    // Adicionar um novo gasto
    gastoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const descricao = gastoForm.querySelector('#descricao').value;
        const valor = gastoForm.querySelector('#valor').value;
        const categoria = gastoForm.querySelector('#categoria').value;

        const { error } = await addGasto(descricao, valor, categoria);
        if (!error) {
            loadGastos(); // Recarrega a lista de gastos
            gastoForm.reset(); // Limpa o formulário
        }
    });

    // Carregar a lista de gastos
    async function loadGastos() {
        const { gastos, error } = await getGastos();
        if (!error) {
            gastosList.innerHTML = gastos.map(gasto => `
                <li>
                    ${gasto.descricao} - R$ ${gasto.valor} (${gasto.categoria})
                    <button onclick="deleteGasto(${gasto.id})">Excluir</button>
                </li>
            `).join('');
        }
    }

    // Renderizar o gráfico
    renderChart();

    // Carregar os gastos ao iniciar a página
    loadGastos();

    return dashboard;
}