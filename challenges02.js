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

//  Affiche le nom et la ville de la boutique.
console.log(boutique.nom)
console.log(boutique.ville)

//  Ajoute la propriété devise avec la valeur "MAD".
 
boutique.devise = "MAD"
console.log(boutique)



//  Passe ouverte à false et affiche le statut « Fermée » à partir de cette valeur.

boutique.ouverte = false
if(boutique.ouverte = false){
    console.log("Fermée")
}
else{
    console.log("ouverte")
}
console.log(boutique)

