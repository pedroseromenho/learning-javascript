// var tableInfo = Array.prototype.map.call(document.querySelectorAll('#table1 tr'), function(tr){
//   return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
//     return td.innerHTML;
//     });
//   });

  // d3.select('#table1 tr').append('svg');
  // var svg = dimple.newSvg("body", 800, 600);
  // for(let i=2; i<tableInfo.length; i++){
  //   var data = parseInt(tableInfo[i]);
  // }
  //   var chart = new dimple.chart(svg, data);
  //   chart.addCategoryAxis("x", "Pays");
  //   chart.addMeasureAxis("y", "Nombre (en milliers)");
  //   chart.addSeries(null, dimple.plot.bar);
  //   chart.draw();



  // var svg = dimple.newSvg("body", 800, 600);
  // var data = [
  //   { "Word":"Hello", "Awesomeness":2000 },
  //   { "Word":"World", "Awesomeness":3000 }
  // ];
  // var chart = new dimple.chart(svg, data);
  // chart.addCategoryAxis("x", "Word");
  // chart.addMeasureAxis("y", "Awesomeness");
  // chart.addSeries(null, dimple.plot.bar);
  // chart.draw();

  // document.getElementById("chartContainer").innerHTML =  chart;

      // var svg = dimple.newSvg("#chartContainer", 590, 400);
      // d3.select('#table1 tr').append('svg')
      // for(let i=2; i<tableInfo.length; i++){
      // var data = tableInfo[i];}
      // var myChart = new dimple.chart(svg, data);
      // myChart.setBounds(60, 30, 505, 305);
      // var x = myChart.addCategoryAxis("x", "Month");
      // x.addOrderRule("Date");
      // myChart.addMeasureAxis("y", "Unit Sales");
      // var s = myChart.addSeries("Channel", dimple.plot.line);
      // s.interpolation = "cardinal";
      // myChart.addLegend(60, 10, 500, 20, "right");
      // myChart.draw();


      // var table = [];
      // let content = document.getElementById("table1");
      // console.log(content)

      // for(let i=2; i<content.length; i++){
      //   table.push(content[i]);
      //   // for(let j=0; j<table.length; j++){
      //   var myData = document.getElementsByTagName("th");
      //   console.log(table.myData);
      //   // }
      // }


      // // Exemple qui marche pour td

//       var t = document.getElementById("table1"); // table
//       var trs = t.getElementsByTagName("tr"); //row
//       var tds = []; // collumn
//       var dataInfo = [];
      
//       for (var i=1; i<trs.length; i++)
//       {
//           tds = trs[i].getElementsByTagName("td");
//           for (var n=1; n<trs.length;n++)
//           {
            
//             dataInfo.push(trs[n])
//           }
//       }
//       console.log(dataInfo);

//       console.log('v2');
//       let test = [];
//       let startDate = 2000;
//       for (var i=2; i<trs.length; i++){
//         for (var j=2; j<trs[i].children.length; j++){
//           test.push({'pays': trs[i].children[1].innerText, 'value':trs[i].children[j].innerText, 'date':j+startDate});
//         }
//       }

//       console.log(test);

//       // var t = document.getElementById("table1"); // table
//       // var trs = t.getElementsByTagName("tr"); //row
//       // var tds = trs.getElementsByTagName("td");
//       // var dataInfo = [];
      
//       // for (var i=1; i<tds.length; i++)
//       // {
//       //        dataInfo.push(tds[n]);
//       // }

//       // console.log(dataInfo)


//         // var svg = dimple.newSvg("#chartContainer", 800, 600);
//         // var data = [
//         //   {"year":year[5], "dataInfo": dataInfo[5]},
//         //   {"year":year[2], "dataInfo": dataInfo[2]},
//         // ];
//         // var chart = new dimple.chart(svg, data);
//         // chart.addCategoryAxis("x", "year");
//         // chart.addMeasureAxis("y", "dataInfo");
//         // chart.addSeries(null, dimple.plot.bar);
//         // chart.draw();


//         // { "Word":"Hello", "Awesomeness":2000 },
//         // { "Word":"World", "Awesomeness":3000 }


//   // $(document).ready(function () {
//   //   var table = $('#table1').tableToJSON({
//   //   });
//   //   console.log(table)
//   // });


//   var tbl = $('#table1 tr:has(td)').map(function(i, v) {
//     var $td =  $('td', this);
//         return {
//                  id: ++i,
//                  country: $td.eq(0).text(),
//                  2002: $td.eq(1).text(),
//                  2003: $td.eq(2).text(),
//                  2004: $td.eq(3).text(),  
//                  2005: $td.eq(4).text(),  
//                  2006: $td.eq(5).text(),  
//                  2007: $td.eq(6).text(),  
//                  2008: $td.eq(7).text(),              
//                  2009: $td.eq(8).text(),  
//                  2010: $td.eq(9).text(),  
//                  2011: $td.eq(10).text(), 
//                  2012: $td.eq(11).text(), 
//                }
// }).get();

// console.log(tbl)


// Tableau 1 Recover

var t = document.getElementById("table1"); // table
var trs = t.getElementsByTagName("tr"); //row
let table = [];
let startDate = 2000;


for (var i=2; i<trs.length; i++){
  for (var j=2; j<trs[i].children.length; j++){
    if(j==2 && !isNaN(parseInt(trs[i].children[j].innerText))){
    table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
    }
  }
}



// Tableau 1

// var t = document.getElementById("table1"); // table
// var trs = t.getElementsByTagName("tr"); //row
// var ths = t.getElementsByTagName("th"); // th
// let table = [];
// let startDate = 2000;

// function button(x){
// for (var i=2; i<trs.length; i++){
//   for (var j=2; j<trs[i].children.length; j++){
//     if(j==x && !isNaN(parseInt(trs[i].children[j].innerText))){
//     table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
//     }
//   }
// }

// for(var k = 0; k < ths.length; k++){
//   console.log(ths);
// }

// }





// // Bouttons Dates

// var button = document.createElement("button");
// button.innerHTML = "Do Something";
// t.appendChild(button);
// button.addEventListener ("click", function() {
//   alert("did something");
// });


// Graphic 1

  var svg = dimple.newSvg("#chartContainer", "100%", 600);
  data = table;
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(200, 0, "60%", 620)
  myChart.addMeasureAxis("p", "Infractions");
  myChart.addSeries("Pays", dimple.plot.pie);
  var myLegend = myChart.addLegend(20, 80, 100, 800, "right");
  myChart.draw();
  
  // // Légendes Interactives
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


// // Graphic (Infractions + Pays)

    // var svg = dimple.newSvg("#chartContainer", "100%", 650);
    // data = table;
    // var myChart = new dimple.chart(svg, data);
    // myChart.setBounds(75, 30, "100%", 600)
    // myChart.addMeasureAxis("x", "Infractions");
    // var y = myChart.addCategoryAxis("y", "Pays");
    // // y.addOrderRule("Date");
    // myChart.addSeries(null, dimple.plot.bar);
    // myChart.draw();


// // Graphic (Date + Infractions + Pays)

//       var svg = dimple.newSvg("#chartContainer", "90%", 1000);
//       data = dimple.filterData(table, "Pays", ["Belgique", "Bulgarie", "Rép.tchèque", "Danemark", "Allemagne", "Estonie(¹)", "Grèce(²)", "Espagne(³)", "Croatie", "Italie(⁴)", "Chypre", "Lettonie(⁵)", "Lituanie", "Luxembourg", "Hongrie", "Malte", "Pays­Bas(⁶)", "Autriche", "Pologne", "Portugal", "Pologne", "Roumanie", "Slovénie", "Slovaquie", "Finlande(⁷)", "Suède", "Islande(⁸)", "Liechtenstein", "Norvège", "Suisse(⁷)", "Monténégro", "ARYdeMacédoine", "Serbie", "Turquie(⁹)"])
//       var myChart = new dimple.chart(svg, data);
//       myChart.setBounds(60, 30, "90%", 900);
//       var x = myChart.addCategoryAxis("x", "Année");
//       // x.addOrderRule("Date");
//       myChart.addMeasureAxis("y", "Infractions");
//       myChart.addSeries("Pays", dimple.plot.line);
//       myChart.addLegend(60, 10, 500, 200, "right");
//       myChart.draw();


var t2 = document.getElementById("table2"); // table
var trs2 = t2.getElementsByTagName("tr"); //row
let table2 = [];
 

  for (var i=1; i<trs2.length; i++){
    for (var j=1; j<trs2[i].children.length; j++){
      if(j==2){
        table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'Date': trs2[0].children[2].innerText});
      }else if(j==3){
        table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'Date': trs2[0].children[3].innerText});
      }
    }
  }

  console.log(table2)



// // Graphic 2 okokokokokokok

// var t2 = document.getElementById("table2"); // table
// var trs2 = t2.getElementsByTagName("tr"); //row
// let table2 = [];
// // let date1 = ["2007–09", "2010–12"];

// let date1 = "2007–09";
// let date2 = "2010–12";


// for (var i=1; i<trs2.length; i++){
//   for (var j=1; j<trs2[i].children.length; j++){
//     if(j==2){
//       table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), '2007–09': date1});
//     }else if(j==3){
//       table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), '2010–12': date2});
//     }
//   }
// }

// console.log(table2)


// var svg = dimple.newSvg("#chartContainer1", "100%", 400);
// data = table2;
//   var myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, "90%", 330);
//   var year1 = myChart.addCategoryAxis("x", '2007–09');
//   var year2 = myChart.addCategoryAxis("x", '2010–12');
//   var count = myChart.addCategoryAxis("x", 'Pays');
//   var pop = myChart.addMeasureAxis("y", "Population Carcérale");
//   myChart.addSeries('2007–09', dimple.plot.bar, [pop, year1]);
//   myChart.addSeries('22010–12', dimple.plot.bar, [pop, year2]);
//   myChart.addLegend(65, 10, 510, 20, "right");
//   myChart.draw();


var svg = dimple.newSvg("#chartContainer1", "100%", 550);
data = table2;
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, "90%", 330);
  myChart.addCategoryAxis("x", ['Pays','Date']);
  myChart.addMeasureAxis("y", "Population Carcérale");
  myChart.addSeries('Date', dimple.plot.bar);
  var myLegend = myChart.addLegend(65, 10, 510, 20, "right");
  myChart.defaultColors = [
    new dimple.color("rgba(255, 0, 0, 0.2)"),
    new dimple.color("rgba(255, 0, 0, 0.8)")
  ]; 
  myChart.draw();

  myChart.legends = [];
  svg.selectAll("title_text")
          .data(["Cliquez sur la légende pour cacher ou afficher les dates:"])
          .enter()
          .append("text")
            .attr("x", 150)
            .attr("y", function (d, i) { return 18 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

  var filterValues = dimple.getUniqueValues(table2, 'Date');
  myLegend.shapes.selectAll("rect")
      .on("click", function (e) {
        var hide = false;
        var newFilters = [];
        filterValues.forEach(function (f) {
          if (f === e.aggField.slice(-1)[0]) {
            hide = true;
          } else {
            newFilters.push(f);
          }
        });
        if (hide) {
          d3.select(this).style("opacity", 0.1);
        } else {
          newFilters.push(e.aggField.slice(-1)[0]);
          d3.select(this).style("opacity", 1);
        }
        filterValues = newFilters;
        myChart.data = dimple.filterData(table2, 'Date', filterValues);

        myChart.draw(800);
      });




  // Table 2 OK

  // for (var i=1; i<trs2.length; i++){
  //   for (var j=1; j<trs2[i].children.length; j++){
  //     if(j==2){
  //       table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'date': date1[0]});
  //     }else if(j==3){
  //       table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'date': date1[1]});
  //     }
  //   }
  // }



// for (var i=1; i<trs2.length; i++){
//   for (var j=1; j<trs2[i].children.length; j++){
//     if(!isNaN(parseInt(trs2[i].children[2].innerText))){
//     table2.push({'Pays': trs2[i].children[1].innerText, 'Infractions':parseInt(trs2[i].children[2].innerText), 
//     'date': date1[0]});
//     }else if(!isNaN(parseInt(trs2[i].children[3].innerText))){
//     table2.push({'Pays': trs2[i].children[1].innerText, 'Infractions':parseInt(trs2[i].children[3].innerText), 
//     'date': date1[1]});
//     }
//   }
// }



// for (var i=1; i<trs2.length; i++){
//   for (var j=1; j<trs2[i].children.length; j++){
//     if(!isNaN(parseInt(trs2[i].children[j].innerText))){
//     table2.push({'Pays': trs2[i].children[1].innerText, 'Infractions':parseInt(trs2[i].children[j].innerText), 
//     '2007–09': date1 = trs2[i].children[2].innerText, '2010–12': date2 = trs2[i].children[3].innerText });
//     }
//   }
// }