import config from "./config";

//Login
async function LoginAccount() {
    const account ={
        email: document.getElementById('accountEmail').value , //TODO: Ajouter l'Email dans l'Html -> formulaire login
        password: document.querySelector('#password')          // TODO: Ajouter l'ID dans l'Html -> formulaire login
    };

    res = await fetch(`${API}/signin`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(account)
    });
}

const jwt = require('jsonwebtoken');
const secret = "LeMotDePasseEstMotDePasse";


//fonction créer Token
function newTokenAcces() {
    const tokenDataUser = {
        id : user.id,
        email : user.email
    };
    const tokenPass = secret;
    const tokenExpireTime = {expiresIn : '1h'};

    return jwt.sign(tokenDataUser , tokenPass, tokenExpireTime);
};

//fonction verifié Token
function verifyTokenAcces(req , res, next) {
    //recup le token
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //verif si il y a un token
    if (!token) return res.status(401).json({ error: 'pas de Token' });

    //verifié le token
    jwt.verify(token, secret, (err, user) => {
        //verifie si token valide
        if (err) return res.status(403).json({ error: 'Token non valide' });
        req.user = user;
        next();
      });
};

//put categories id
async function updateCategory(categoryId, token, updatedData) {
    try {
        const response = await fetch(`${config}/categories`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(updatedData)
        });

        if (!response.ok) {
            throw new Error(`Erreur : ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Catégorie mise à jour avec ID ${categoryId} :`, data);
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de la catégorie ${categoryId} :`, error);
    }
}

//Delete categories
async function deleteCategory(categoryId, token) {
    try {
        const response = await fetch(`${config}/categories`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error(`Erreur : ${response.status} - ${response.statusText}`);
        }

        console.log(`Catégorie avec ID ${categoryId} supprimée avec succès.`);
    } catch (error) {
        console.error(`Erreur lors de la suppression de la catégorie ${categoryId} :`, error);
    }
}


//GET categories 
async function getCategories() {
    try{
        const response = await fetch(`${config}/categories`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log('Liste des catégories :', data);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
    }
}

getCategories();

//GET categories id
async function getCategoryById(categoryId) {
    try {
        const response = await fetch(`${config}/categories`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log(`Catégorie avec ID ${categoryId} :`, data);
    } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${categoryId} :`, error);
    }
}

getCategoryById();

//partie ADD Product USER OnClick Button
async function userCreateProduct(token, name, categorieID) {
    if (token === tokenPass) {
        const product = { name, categorieID };
        const res = await fetch(`${config}/produits/`, {
            method: "POST",
            headers: { "content-type": "application/json", "authorization": `Bearer ${token}` },
            body: JSON.stringify(product)
        });
        const data = await res.json();
        return data;
    }
    // Erreur côté client, donc on lance une exception
    throw new Error("Token invalide");
};

//get Product
async function getAllProduct() {
    try {
        const res = await fetch(`${config}/produits/`, {
            method: "GET",
            headers: { "content-type": "application/json" }
        });
        const data = await res.json();
        return data; //retourne la liste
    } catch (error) {
        console.log('Erreur lors de la récupération des produits :', error);
        return [];
    }
};

async function getProducyByID(id) {
    try {
        const res = await fetch(`${config}/produits/${id}`, {
            method:"GET",
            headers:{"content-type":"application/json"}
        })
       const data = await res.json();
       console.log('Liste des produits par id :', data);
    }
    catch (error) {
        console.log('Erreur lors de la récupération des produits :', error);
    }
};

async function getProducyByCategories(categorieID) {
    try {
        const res = await fetch(`${config}/produits/categorie${categorieID}`, {
            method:"GET",
            headers:{"content-type":"application/json"}
        })
       const data = await res.json();
       console.log('Liste des produits par catégories :', data);
    }
    catch (error) {
        console.log('Erreur lors de la récupération des produits :', error);
    }
};

async function getProducyByPage(term) {
    try {
        const res = await fetch(`${config}/produits/1/${term}`, {
            method:"GET",
            headers:{"content-type":"application/json"}
        })
       const data = await res.json();
       console.log('Liste des produits par term :', data);
    }
    catch (error) {
        console.log('Erreur lors de la récupération des produits :', error);
    }
};

async function deleteProduct(token, id) {
    if (token===tokenPass) {
        const res = await fetch(`${config}/produits/${id}`,  {
            method:"DELETE",
            headers: {"content-type":"application/json"}
        });
        const data = await res.json();
        return data
    }
    else return res.status(403).json({ error: 'Token invalide' });
}

async function modifProduct(token, newValue, id) {
    if (token===tokenPass) {
        const newValue = [{"name":"ValueModif"/*name modif*/, "categorieID":1/*idcategories*/}]
        const res = await fetch(`${config}/produits/${id}`,  {
            method:"PUT",
            headers: {"content-type":"application/json", 'authorization' : `Bearer ${token}`},
            body: json.stringify({name: newValue.name, categorieID : newValue.categorieID}) 
        });
        const data = await res.json();
        return data
    }
    else return res.status(403).json({ error: 'Token invalide' });
}
