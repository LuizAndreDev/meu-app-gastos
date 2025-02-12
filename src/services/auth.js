import { supabase } from './supabase';

export async function signInWithEmail(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      throw error; // Lança o erro para ser capturado no catch
    }
    return { user, error: null }; // Retorna null para o erro em caso de sucesso
  } catch (error) {
    return { user: null, error }; // Retorna null para o usuário em caso de erro
  }
}

export async function signInWithGoogle() {
  try {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      throw error;
    }
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
    return { error: null };
  } catch (error) {
    return { error };
  }
}
