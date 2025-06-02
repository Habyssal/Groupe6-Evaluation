import config from "./config";

//post categories avec trois categories de base
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
