import { initRouter } from './router.js';
import { supabase } from './services/supabase';

// Inicializa o roteador
initRouter();

// Observa mudanças no estado de autenticação
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        // Se o usuário fizer login, recarrega a página
        window.location.reload();
    } else if (event === 'SIGNED_OUT') {
        // Se o usuário fizer logout, recarrega a página
        window.location.reload();
    }
});