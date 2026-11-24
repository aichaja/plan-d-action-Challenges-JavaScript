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

// Avec filter(), isole les produits de papeterie en stock. 
// Applique ensuite map() et reduce() à cette
// sélection pour obtenir ses noms et sa valeur totale.

const produitspapeteriestock =  produits.filter(produit => 
    produit.categorie === "Papeterie" && produit.stock > 0)

const noms = produitspapeteriestock.map(produit => produit.nom)

const totale = produitspapeteriestock.reduce((total , produit) => total + produit.prix * produit.stock , 0)

console.log(noms)
console.log(totale , "DH")