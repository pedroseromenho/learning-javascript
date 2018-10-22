let frigo = [
    {name:"Coca-Cola", type: "boisson", stateInPercent: 85},
    {name:"Jus de Pommes", type: "boisson", stateInPercent: 100 },
    {name:"Jus de Pommes Bio", type: "boisson", stateInPercent: 100 },
    {name:"Confiture de Fraise Materne", type: "nourriture", stateInPercent: 0 },
    {name:"Sandwich", type: "nourriture", stateInPercent: 10 },
    {name:"Sandwich", type: "nourriture", stateInPercent: 100 },
    {name:"Saucisson", type: "nourriture", stateInPercent: 23 },
    {name:"Laitue bio", type: "nourriture", stateInPercent: 100 },
    {name:"Boite de 10 Oeufs bio", type: "nourriture", stateInPercent: 60 },
    {name:"Nurofen Enfants", type: "medicament", stateInPercent: 78 }
    ];


// Afficher tout ce qu'il y a dans le frigo dans une liste html    
let contenuFrigo = "";

for(let i=0; i<frigo.length; i++){
    contenuFrigo += "<li>" + frigo[i].name + "</li>";
    document.getElementById("jsMyFrigo").innerHTML = contenuFrigo;
}

// Afficher une liste html de ce qu'il faut acheter pour remplacer ce qui est entamé
let listeCourses = [];

for (let j=0; j < frigo.length; j++){
    
    if (frigo[j].stateInPercent < 100){
        console.log(frigo[j])
        listeCourses.push("<li>" + frigo[j].name + "</li>");
        document.getElementById("jsMyCourses").innerHTML = listeCourses.join("");
}
}

// Afficher la réponse à une question du type : "combien d'oeufs reste-t-il?"

let eggs = (60*10)/100;
document.getElementById("jsEggs").innerHTML = eggs;

