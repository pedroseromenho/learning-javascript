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


      var t = document.getElementById("table1");
      var trs = t.getElementsByTagName("tr");
      var tds = "";
      
      for (var i=1; i<trs.length; i++)
      {
          tds = trs[i].getElementsByTagName("td");
          for (var n=1; n<trs.length;n++)
          {
              console.log(tds[n]);
          }
      }