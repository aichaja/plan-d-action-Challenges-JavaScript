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



//  Affiche la première catégorie et le nombre initial de catégories.

console.log(categories[0])
console.log(categories.length)





//  Ajoute « Classement » à la fin, puis remplace « Accessoires » par « Bureau ».
categories.push("Classement")
console.log(categories)

categories.splice(1,1,"Bureau")
console.log(categories)



//  Retire la dernière catégorie et affiche le tableau final.
categories.pop()
console.log(categories)


