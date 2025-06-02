import config from './config';


async function CreateAccount(){
    const adminaccount = {
            email: "admin.admin@gmail.com",
            password: "admin"
        };
    
    res = await fetch (`${config}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminaccount)
    });
}

async function createCategories(token) {
    const categories = ['Électronique', 'Vêtements', 'Alimentation'];
    const categoryIds = [];

    for (const category of categories) {
        const response = await fetch(`${config}/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ name: category })
        });
        const data = await response.json();
        categoryIds.push(data.id);
    }
    return categoryIds;
}

async function createDefaultProducts(token) {
    const products = [{ name: "PC", categorieID: 1 },{ name: "Téléphone portable", categorieID: 1 },{ name: "Écouteurs", categorieID: 1 },{ name: "Tee-shirt", categorieID: 2 },{ name: "Short", categorieID: 2 },{ name: "Bob", categorieID: 2 },{ name: "Yaourt", categorieID: 3 },{ name: "Burger", categorieID: 3 },{ name: "Eau", categorieID: 3 }];

    for (const product of products) {
        const res = await fetch (`${config}/produits` , {
            method : "POST",
            headers : {"content-type": 'application/json', 'authorization' : `Bearer ${token}`},
            body : json.stringify({name : product.name, categorieID : product.categorieID})
        });
        const data = await res.json();
        //products.push(data.id);
    }
    return data;
};