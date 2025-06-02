import { getAllProduct } from "../modules/products.js";

const container = document.getElementById("products-container");

function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>ID : ${product.id}</p>
        <p>Catégorie : ${product.categorieID}</p>
    `;
    return card;
}

async function displayProducts() {
    const products = await getAllProduct();
    container.innerHTML = ""; // Vide le conteneur
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

displayProducts();