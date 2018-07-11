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




var t = document.getElementById("table1"); // table
var trs = t.getElementsByTagName("tr"); //row
let table = [];
let startDate = 2000;
for (var i=2; i<trs.length; i++){
  for (var j=2; j<trs[i].children.length; j++){
    table.push({'pays': trs[i].children[1].innerText, 'value':trs[i].children[j].innerText, 'date':j+startDate});
  }
}
console.log(table);



var svg = dimple.newSvg("#chartContainer", 800, 600);
var data = table;
var chart = new dimple.chart(svg, data);
chart.addCategoryAxis("x", "date");
chart.addMeasureAxis("y", "value");
chart.addSeries(null, dimple.plot.bar);
chart.draw();


//   var svg = dimple.newSvg("#chartContainer", 590, 400);
//   d3.buffer(table){
//   data = dimple.filterData(data, "date", ["pays"])
//   var myChart = new dimple.chart(svg, data);
//   myChart.setBounds(60, 30, 505, 305);
//   var x = myChart.addCategoryAxis("x", "date");
//   x.addOrderRule("Date");
//   myChart.addMeasureAxis("y", "value");
//   myChart.addSeries("pays", dimple.plot.line);
//   myChart.addLegend(60, 10, 500, 20, "right");
//   myChart.draw();
// });