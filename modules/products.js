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
    return res.status(403).json({ error: 'Token invalide' });
};
//

createDefaultProducts(tokenPass);

export {createDefaultProducts, userCreateProduct};