// function myFunction(){
//     for (i=1; i < 6; i++){
//         var resultat = "";
//         var lettre = i.toString();
//         resultat = lettre.repeat(i);
//         for(let j=1; j<6; j++){
//             var resultat1 = ""; 
//             var inside = j.toString();
//             resultat1 = inside.repeat(j);
//         }     
//         console.log(resultat, resultat1);
//     }
// }


function myFunction(){
    for (let i = 1; i <= 5; i++){
        var resultat = "";
        for (let j = 1; j <= 5 ; j++){
        resultat = resultat + " " + i;
        console.log (resultat);
        }
    }
}