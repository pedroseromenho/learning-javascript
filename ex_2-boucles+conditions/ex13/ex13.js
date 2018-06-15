// - moins de 16,5 : dénutrition ou famine
// - 16,5 <= IMC < 18,5 : maigreur
// - 18,5 <= IMC < 25 : corpulence normale
// - 25 <= IMC < 30 : surpoids
// - 30 <= IMC < 35 : obésité modérée
// - 35 <= IMC < 40 : obésité sévère
// - plus de 40 : obésité morbide

function calculIMC(){
var poids = parseFloat(prompt('Votre poids en kg svp'));
var taille = parseFloat(prompt('Votre taille en mètres svp'));
var IMC = poids / (taille * taille);

    if(IMC < 16.5){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes donc en dénutrition ou famine.');
    
    }else if(IMC < 18.5){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes donc dans catégorie maigreur');
    
    }else if(IMC < 25){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous avez une corpulence normale');
    
    }else if(IMC < 30){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes en surpoids');
    
    }else if(IMC < 35){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes avez une obésité modérée');
    
    }else if(IMC < 40){
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes avez une obésité sévère');
    
    }else{
        alert('Voitre IMC est ' + IMC.toFixed(2) + ' vous êtes avez une obésité morbide');
    }        
}