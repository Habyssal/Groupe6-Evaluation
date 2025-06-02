import config from "./config";
/*import { verifyTokenAcces } from "./authorizationToken";*/
import { json } from "body-parser";

const tokenPass = "LeMotDePasseEstMotDePasse"

async function createProducts(token) {
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

createProducts(tokenPass);