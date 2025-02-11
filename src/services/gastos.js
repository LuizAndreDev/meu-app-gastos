import { supabase } from './supabase';

export async function addGasto(descricao, valor, categoria) {
    const { data, error } = await supabase
        .from('gastos')
        .insert([{ descricao, valor, categoria, user_id: supabase.auth.user().id }]);

    return { data, error };
}

export async function getGastos() {
    const { data: gastos, error } = await supabase
        .from('gastos')
        .select('*')
        .eq('user_id', supabase.auth.user().id);

    return { gastos, error };
}