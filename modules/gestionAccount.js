import config from "./config";


async function CreateAccount(){
    const adminaccount = {
            email: "admin.admin@gmail.com",
            password: "admin"
        };
    
    res = await fetch (`${config}/signin/`, {
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

    res = await fetch(`${config}/signin/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(account),
    });
}

