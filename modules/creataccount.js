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