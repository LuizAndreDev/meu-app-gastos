import { createClient } from '@supabase/supabase-js';

// Aqui estamos pegando as variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Criamos o cliente do Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);