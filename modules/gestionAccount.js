const API = "http://localhost:3000" 


async function CreateAccount(){
    const adminaccount = {
            email: "admin.admin@gmail.com",
            password: "admin"
        };
    
    res = await fetch (`${API}/signin/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminaccount)
    });
}


async function LoginAccount() {
    const account ={
        email: document.getElementById('accountEmail').value , //TODO: Ajouter l'Email dans l'Html -> formulaire login
        password: document.querySelector('#password')          // TODO: Ajouter l'ID dans l'Html -> formulaire login
    };

    res = await fetch(`${API}/signin/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(account),
    });
}