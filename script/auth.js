const API = "http://localhost:3000";

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('accountEmail');
const passwordInput = document.getElementById('password');
const connexionBtn = document.querySelector('.connexion');

//active le bouton si les champs sont rempli
loginForm.addEventListener('input', () => {
    connexionBtn.disabled = !(emailInput.value && passwordInput.value);
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const res = await fetch(`${API}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (res.ok) {
            //connexion réussie, redirige vers listItem.html
            window.location.href = './pages/listItem.html';
        } else {
            const data = await res.json();
            alert(data.error || 'Erreur de connexion');
        }
    } catch (err) {
        alert('Erreur serveur');
    }
});