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


// • Avec reduce(), calcule le nombre total d’unités disponibles.

const stocks = produits.reduce((total ,produit) => total + produit.stock , 0)
console.log(stocks)


// • Avec un second reduce(), calcule la valeur totale du stock. Pour chaque produit,
//  multiplie son prix unitaire par son stock.

const stockprix = produits.reduce((total ,produit) => total + produit.stock * produit.prix , 0)
console.log(stockprix , "DH")

