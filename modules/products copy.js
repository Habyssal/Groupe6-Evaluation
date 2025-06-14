import config from "./config";
/*import { verifyTokenAcces } from "./authorizationToken";*/
import { json } from "body-parser";


const tokenPass = "LeMotDePasseEstMotDePasse"

async function createDefaultProducts(token) {
    const products = [{ name: "PC", categorieID: 1 },{ name: "Téléphone portable", categorieID: 1 },{ name: "Écouteurs", categorieID: 1 },{ name: "Tee-shirt", categorieID: 2 },{ name: "Short", categorieID: 2 },{ name: "Bob", categorieID: 2 },{ name: "Yaourt", categorieID: 3 },{ name: "Burger", categorieID: 3 },{ name: "Eau", categorieID: 3 }];

    for (const product of products) {
        const res = await fetch (`${config}/produits/` , {
            method : "POST",
            headers : {"content-type": 'application/json', 'authorization' : `Bearer ${token}`},
            body : json.stringify({name : product.name, categorieID : product.categorieID})
        });
        const data = await res.json();
        //products.push(data.id);
    }
    return data;
};


//partie ADD Product USER OnClick Button
async function userCreateProduct(token) {
    if (token===tokenPass) {
        const product = [{name: /*document.getElementById('formProduct')*/"test", categorieID: /*document.getElementById('formCategoriesSelect')*/1}];
        const res = await fetch(`${config}/produits/` , {
            method:"POST",
            headers : {"content-type": 'application/json', 'authorization' : `Bearer ${token}`},
            body : json.stringify(product)
        });
        const data = await res.json();

        return data;
    }
    else return res.status(403).json({ error: 'Token invalide' });
};

//get Product
async function getAllProduct() {
    try {
    const res = await fetch(`${config}/produits/`, {
        method:"GET",
        headers:{"content-type":"application/json"}
    })
    const data = await res.json();
    console.log('Liste des produits par défault :', data);
    }
    catch (error) {
        console.log('Erreur lors de la récupération des produits :', error);
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

createDefaultProducts(tokenPass);

export {createDefaultProducts, userCreateProduct, getAllProduct, getProducyByCategories, getProducyByID, getProducyByPage};