import { signInWithGoogle } from '../services/auth';

export default function Login() {
    const login = document.createElement('div');
    login.innerHTML = `
        <h1>Login</h1>
        <button id="google-login">Entrar com Google</button>
    `;

    const googleLoginButton = login.querySelector('#google-login');
    googleLoginButton.addEventListener('click', async () => {
        const { user, error } = await signInWithGoogle();
        if (user) {
            window.location.href = '/dashboard';
        } else {
            alert(error.message);
        }
    });

    return login;
}