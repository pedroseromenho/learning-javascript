// Exercice 9 - utilisation de la boucle while
// Créer un bouton. Au click de ce bouton, lancer la fonction testWhile. 
// Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant la lettre p,
// et le redemande tant que l'utilisateur ne l'a pas fait. Il affiche ensuite 
// la chaîne saisie entre guillemets.

function testWhile(){
    let mot = prompt('entrez un mot avec p')
    while(!mot.includes("p")){
        mot = prompt('entrez un mot avec p');
    }
    alert(mot);
}    


// function testWhile(){
//     var tab = prompt('ajouter un p');
//     var element = 'p';
//     var text = tab.indexOf(element);

//     while(text != -1){
//         let resultat = alert(tab);
//     }
// }      


