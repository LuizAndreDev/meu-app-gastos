import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import { supabase } from './services/supabase';

export async function initRouter() {  // Adicione 'async' para permitir 'await'
  const root = document.getElementById('app');

  // Obtém o usuário autenticado corretamente
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Erro ao obter usuário:", error.message);
  }

  if (user) {
    // Se estiver logado, mostra o Dashboard
    root.appendChild(Dashboard());
  } else {
    // Se não estiver logado, mostra o Login
    root.appendChild(Login());
  }
}
