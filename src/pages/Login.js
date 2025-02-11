import { signInWithGoogle, signInWithEmail } from '../services/auth';

export default function Login() {
    const login = document.createElement('div');
    login.innerHTML = `
        <h1>Login</h1>
        <form id="login-form">
            <input type="email" id="email" placeholder="E-mail" required>
            <input type="password" id="password" placeholder="Senha" required>
            <button type="submit">Entrar</button>
        </form>
        <button id="google-login">Entrar com Google</button>
    `;

    const loginForm = login.querySelector('#login-form');
    const googleLoginButton = login.querySelector('#google-login');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('#email').value;
        const password = loginForm.querySelector('#password').value;

        const { user, error } = await signInWithEmail(email, password);
        if (user) {
            window.location.href = '/dashboard';
        } else {
            alert(error.message);
        }
    });

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