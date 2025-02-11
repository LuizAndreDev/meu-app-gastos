import { supabase } from './supabase';

export async function signInWithEmail(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    return { user, error };
}

export async function signInWithGoogle() {
    const { user, error } = await supabase.auth.signIn({ provider: 'google' });
    return { user, error };
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
}