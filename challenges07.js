const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];



// • Avec find(), récupère le produit d’ID 103. Réessaie avec l’ID 999.

const lid = produits.find(produit => produit.id == 103)
const lid199 = produits.find(produit => produit.id == 199)
console.log(lid)
console.log(lid199)

// • Avec findIndex(), récupère la position de ces deux ID dans le tableau.


const lid103 = produits.findIndex(produit => produit.id == 103)
const lid99 = produits.findIndex(produit => produit.id == 199)
console.log(lid103)
console.log(lid99)
