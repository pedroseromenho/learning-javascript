// Créer un bouton. Au click de ce bouton, lancer la fonction jourDeLaSemaine(). 
// Cette fonction détermine le jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. 
// jusqu'à samedi.


function jourDeLaSemaine(){
    switch (new Date().getDay()){
        case 0: 
            jourDeLaSemaine = alert("Dimanche");
            break;
        case 1: 
            jourDeLaSemaine = alert("Lundi");
            break; 
        case 2: 
            jourDeLaSemaine = alert("Mardi");
            break;        
        case 3: 
            jourDeLaSemaine = alert("Mercredi");
            break; 
        case 4: 
            jourDeLaSemaine = alert("Jeudi");
            break; 
        case 5: 
            jourDeLaSemaine = alert("Vendredi");
            break; 
        case 6: 
            jourDeLaSemaine = alert("Samedi");
            break; 
    }   
}
