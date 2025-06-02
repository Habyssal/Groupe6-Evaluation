import { userCreateProduct } from "../modules/products.js";

document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';

const form = document.getElementById("addItemForm");
const nameInput = document.querySelector(".name-input");
const categoryInput = document.querySelector(".category-input");
const addButton = document.querySelector(".add-product");

const token = "LeMotDePasseEstMotDePasse";

addButton.disabled = !(nameInput.value && categoryInput.value);

form.addEventListener("input", () => {
    addButton.disabled = !(nameInput.value && categoryInput.value);
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const categorieID = parseInt(categoryInput.value);

    try {
        const result = await userCreateProduct(token, name, categorieID);
        alert("Produit ajouté !");
        form.reset();
        addButton.disabled = true;
    } catch (err) {
        alert("Erreur lors de l'ajout du produit");
    }
});