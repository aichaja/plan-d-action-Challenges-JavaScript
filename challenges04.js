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




// Avec filter(), garde les produits dont le stock est supérieur à 0.

const leStockSupérieur0 =  produits.filter(produit => produit.stock > 0)

console.log(leStockSupérieur0)

// Fais un deuxième filtre pour garder les produits de la catégorie 
// « Papeterie » dont le stock est supérieur à 0.

const laCatégoriePapeteriestocksuperieur0 =  produits.filter(produit => 
    produit.categorie === "Papeterie" && produit.stock > 0)

console.log(laCatégoriePapeteriestocksuperieur0)
