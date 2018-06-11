
// Créer un bouton. Au click de ce bouton, 
// lancer la fonction calculMoyenne.

// Cette fonction va calculer la moyenne des nombres entrés 
// au clavier :

// demande à l'utilisateur d'entrer un nombre entier.
// si l'utilisateur entre autre chose qu'un nombre entier, 
// un message d'alerte signale l'erreur et ensuite, 
// la fonction redemande à l'utilisateur d'entrer un nombre entier.
// tant que le nombre entré est positif ou nul, 
// la fonction mémorise ce nombre et 
// l'additionne aux autres nombres précédemment entrés.
// si le nombre est négatif, alors la fonction calcule 
// la moyenne de tous les nombres entrés en divisant 
// la somme totale par le nombre de valeurs entrées.
// la fonction affiche le nombre de valeurs entrées
// la fonction affiche la moyenne

function calculMoyenne(){
var n = 0;
var moyenne = 0;
var nb_n = 0;
var resultat = 0;

while(n >= 0 || isNaN(n) == true){
    n = parseInt(prompt('entrez n.'));

    if(isNaN(n)){
        alert ('entrez un numéro svp, et pas une lettre connard');

    }else if (isNaN(n) == false && n>=0){
        nb_n ++;
        resultat += n;
   
    }else if (n < 0){
        nb_n ++;
        resultat += n;
        moyenne =  resultat / nb_n;
        alert('Vous avez entré ' + nb_n + " valeurs et la moyenne est: " + moyenne);
    }
    // else{
    // Ajouter seulement números intiers !!!    
    //     alert('Erreur! Entrez un número !')
    // }
}
}