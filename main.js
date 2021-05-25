//travail 7
nouveau="Items: "
tousPrix=0

for (let i=0; i<1;){
item = prompt("Quel item achetes-tu? ") //prompt pour le nom de l'item,
prix = parseFloat(prompt("Quel est le prix de cet item? "))
cont = confirm("Voulez-vous ajouter un item? ")
if (cont == true){ //si oui, la boucle recommence
i=0;
} else {
i=1;
}
nouveau = nouveau + item + ", " //ajoute le nombre de tous les items
tousPrix = tousPrix + prix //trouve le prix total

}
// le prix de livraison commence a 2 et change a 3 dans le code ci-dessous
prixLivraison = 2 
if (tousPrix >= 10){
//le prix de livraison change a 3 si la commande est plus que 10$  
prixLivraison++ 
} else{
console.log("")
}
//calcule et arrondis la valeur de la commande avant les taxes
total = Math.round((tousPrix+prixLivraison)*100)/100 
console.log("++++++++++++++++")
console.log("RECU DE COMMANDE")
console.log("++++++++++++++++")
console.log(nouveau + " " + tousPrix + "$")
console.log("Livraison " + prixLivraison + "$" )
console.log("SOUS-TOTAL " + (total) + "$")
console.log("Taxes " + Math.round(113*total)/100+ "$") //calcule le tax
console.log("TOTAL " + Math.round(113*total)/100 + "$") //ajoute le tax au sous-total
