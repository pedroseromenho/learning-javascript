// // Créer un bouton. Au click de ce bouton, on lance la fonction 
// conversionTemperature.

// L'utilisateur choisit d'abord dans le menu affiché quel type 
// de conversion il souhaite, il indique son choix en indiquant 
// le numéro correspondant dans le menu au moyen d'un prompt javascript

// Ensuite, un second prompt va lui demander la température à convertir 
// et afficher le résultat dans une boîte d'alerte.

// Le menu :

// Fin du programme
// De Celsius vers Fahrenheit
// De Celsius vers Kelvin
// De Fahrenheit vers Celsius
// De Fahrenheit vers Kelvin
// De Kelvin vers Celsius
// De Kelvin vers Fahrenheit

// [°F] = ([°C] x 9/5) + 32
// [K] = [°C] + 273,15
// [°C] = ([°F] - 32) / (9/5)
// [K] = (([°F] - 32) x (5/9)) + 273,15
// [°C] = [K] - 273,15
// [°F] = ([K] x 9/5) - 459,67


function conversionTemperature(){
var valeur = parseInt(prompt("introduire une valeur"));


    if(document.getElementById("temperature").value == "1"){
       alert((valeur * (9/5)) + 32); 

    }else if(document.getElementById("temperature").value == "2"){
        alert(valeur + 273.15); 

    }else if(document.getElementById("temperature").value == "3"){
        alert((valeur - 32) / (9/5)); 

    }else if(document.getElementById("temperature").value == "4"){
        alert(((valeur - 32) * (5/9)) + 273,15); 

    }else if(document.getElementById("temperature").value == "5"){
        alert(valeur - 273.15);
    
    }else if(document.getElementById("temperature").value == "6"){
        alert((valeur * (9/5)) - 459,67);    
    }
}