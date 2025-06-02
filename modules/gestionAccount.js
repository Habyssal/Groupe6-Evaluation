async function CreateAccount(){
    
    res = await fetch (`${API}/signin/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: "admin.admin@gmail.com", password: "admin" }),
    });
    if (res.ok) {
        alert('Compte admin créé !');
    } else {
        const data = await res.json();
        alert(data.error || 'Erreur lors de la création du compte');
    }
}

CreateAccount();

async function LoginAccount() {
    const account ={
        email: document.getElementById('accountEmail').value ,
        password: document.querySelector('#password').value
    };

    res = await fetch(`${API}/signin/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(account)
    });
}

