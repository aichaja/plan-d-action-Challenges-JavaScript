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



//  Crée un nouveau tableau et copie chaque objet produit avec une 
// boucle et la syntaxe spread.
const copie = [] 
for(let i = 0; i < produits.length ; i++){
    copie.push({...produits[i]})
}
console.log(copie)



//  Affiche le nom et le stock de chaque produit de la copie.
//  Dans la copie, passe le stock du Stylo à 6,
for(let i = 0; i < copie.length ; i++){
   console.log(copie[i].nom , copie[i].stock)
   if(copie[i].nom == "Stylo"){
    copie[i].stock = 6
    
   }
    console.log(copie[i].nom , copie[i].stock)
   

}
// ajoute une Gomme (ID 106, Papeterie, 5 DH, stock 8), 
// puis retire le Sac (ID 104).
copie.push({ id: 106, nom: "Gomme", categorie: "Papeterie", prix: 5, stock: 8 },)
for(let i = 0; i < copie.length ; i++){
    if(copie[i].id === 104){
        copie.splice(i,1)
    }
    

}

console.log(copie)

 




