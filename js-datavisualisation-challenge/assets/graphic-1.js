var t = document.getElementById("table1"); // table
var trs = t.getElementsByTagName("tr"); //row
let table = [];
let startDate = 2000;


for (var i=2; i<trs.length; i++){
  for (var j=2; j<trs[i].children.length; j++){
    if(!isNaN(parseInt(trs[i].children[j].innerText))){
    table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
    }
  }
}

var svg = dimple.newSvg("#chartContainer", "100%", 850);
data = dimple.filterData(table, "Pays", ["Belgique", "Bulgarie", "Rép.tchèque", "Danemark", "Allemagne", "Estonie(¹)", "Grèce(²)", "Espagne(³)", "Croatie", "Italie(⁴)", "Chypre", "Lettonie(⁵)", "Lituanie", "Luxembourg", "Hongrie", "Malte", "Pays­Bas(⁶)", "Autriche", "Pologne", "Portugal", "Pologne", "Roumanie", "Slovénie", "Slovaquie", "Finlande(⁷)", "Suède", "Islande(⁸)", "Liechtenstein", "Norvège", "Suisse(⁷)", "Monténégro", "ARYdeMacédoine", "Serbie", "Turquie(⁹)"])
var myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 200, "95%", 600);
var x = myChart.addCategoryAxis("x", "Année");
// x.addOrderRule("Date");
myChart.addMeasureAxis("y", "Infractions");
myChart.addSeries("Pays", dimple.plot.line);
myChart.addLegend(60, 10, 500, 200, "right");
myChart.draw();


// var svg = dimple.newSvg("#chartContainer", "100%", 600);
// data = table;
// var myChart = new dimple.chart(svg, data);
// myChart.setBounds(200, 0, "60%", 620)
// myChart.addMeasureAxis("p", "Infractions");
// myChart.addSeries("Pays", dimple.plot.pie);
// var myLegend = myChart.addLegend(20, 40, 100, 800, "right");
// myChart.draw();


  // buttonGroup=[];


// for (let a = 2000; a < 2012; a ++){
// let buttonDisplay = document.getElementById("chartContainer");
// var button = document.createElement("button");
// button.innerHTML = buttonGroup.push(a + startDate);
// buttonDisplay.appendChild(button);
// }    


  //     // Légendes Interactives
  // myChart.legends = [];
  // svg.selectAll("title_text")
  //         .data(["Cliquez sur la légende","pour cacher ou afficher", "les différents pays:"])
  //         .enter()
  //         .append("text")
  //           .attr("x", 0)
  //           .attr("y", function (d, i) { return 41 + i * 14; })
  //           .style("font-family", "sans-serif")
  //           .style("font-size", "10px")
  //           .style("color", "Black")
  //           .text(function (d) { return d; });

  // var filterValues = dimple.getUniqueValues(table, "Pays");
  // myLegend.shapes.selectAll("rect")
  //     .on("click", function (e) {
  //       var hide = false;
  //       var newFilters = [];
  //       filterValues.forEach(function (f) {
  //         if (f === e.aggField.slice(-1)[0]) {
  //           hide = true;
  //         } else {
  //           newFilters.push(f);
  //         }
  //       });
  //       if (hide) {
  //         d3.select(this).style("opacity", 0.1);
  //       } else {
  //         newFilters.push(e.aggField.slice(-1)[0]);
  //         d3.select(this).style("opacity", 0.8);
  //       }
  //       filterValues = newFilters;
  //       myChart.data = dimple.filterData(table, "Pays", filterValues);

  //       myChart.draw(800);
  //     });




// // Graphic Camenbert



// let buttonDisplay = document.getElementById("chartContainer");
// var startButton = 2002;
// var arrtest=[];
// for(let m = 2; m<trs[2].children.length; m++){
//   var button = document.createElement("button");
//   // button.classList.add(""+m);
//   button.innerHTML = startButton++;
//   buttonDisplay.appendChild(button);
//   button.addEventListener ("click", function(x) {  
//     let self = this;
//     for (var i=2; i<trs.length; i++){
//       for (var j=2; j<trs[i].children.length; j++){
//         if(!isNaN(parseInt(trs[i].children[j].innerText))){
//           let obj = {'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate};
//           console.log(table)
//           if (table.length < 11){
//             table.push(obj);
//           }else{
//             table.splice(i, 1, obj);
//           }
//       }
//       }
//     }

//     table.forEach(function(e){
//       let yearbtn = self.innerHTML;
//       if(yearbtn == e["Année"]){
//         arrtest.push(e);
//       }
//     });
//     myChart.data = arrtest;
//     // var myLegend = myChart.addLegend(20, 0, 100, 800, "right");
//     myChart.draw(1000);
//     // var filterValues = dimple.getUniqueValues(table, "Pays");
//   });
// }


// Graphic 1


  // if(j==parseInt(x.target.innerHTML)-2000 && !isNaN(parseInt(trs[i].children[j].innerText)))


  // if(!isNaN(parseInt(trs[i].children[j].innerText))){
  //   table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
  // }



//   let buttonDisplay = document.getElementById("chartContainer");
// var startButton = 2002;
// for(let m = 2; m<trs[2].children.length; m++){
//   var button = document.createElement("button");
//   // button.classList.add(""+m);
//   button.innerHTML = startButton++;
//   console.log(button.innerHTML);
//   buttonDisplay.appendChild(button);
//   button.addEventListener ("click", function(x) {  
//     for (var i=2; i<trs.length; i++){
//       for (var j=2; j<trs[i].children.length; j++){
//         if(!isNaN(parseInt(trs[i].children[j].innerText))){
//         table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
//       }
//       }
//     }
//     console.log(table)
//     myChart.data = table;
//     // var myLegend = myChart.addLegend(20, 0, 100, 800, "right");
//     myChart.draw(1000);
//     // var filterValues = dimple.getUniqueValues(table, "Pays");
//   });
// }
