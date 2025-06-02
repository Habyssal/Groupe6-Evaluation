import config from "./config";
/*import { verifyTokenAcces } from "./authorizationToken";*/


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

createDefaultProducts(tokenPass);

export {createDefaultProducts, userCreateProduct, getAllProduct, getProducyByCategories, getProducyByID, getProducyByPage};