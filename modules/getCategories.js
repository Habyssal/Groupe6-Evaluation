import config from "./config";

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
