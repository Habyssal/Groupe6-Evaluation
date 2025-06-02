import config from "./config";

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
