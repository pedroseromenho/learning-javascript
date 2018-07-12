var t = document.getElementById("table1"); // table
var trs = t.getElementsByTagName("tr"); //row
let table = [];
let startDate = 2000;


// Tableau 1

for (var i=2; i<trs.length; i++){
  for (var j=2; j<trs[i].children.length; j++){
    if(j==2 && !isNaN(parseInt(trs[i].children[j].innerText))){
    table.push({'Pays': trs[i].children[1].innerText, 'Infractions':parseInt(trs[i].children[j].innerText), 'Année':j+startDate});
    }
  }
}

// Graphic 1

  var svg = dimple.newSvg("#chartContainer", "100%", 600);
  data = table;
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(200, 0, "60%", 620)
  myChart.addMeasureAxis("p", "Infractions");
  myChart.addSeries("Pays", dimple.plot.pie);
  var myLegend = myChart.addLegend(20, 80, 100, 800, "right");
  myChart.draw();
  
  // Légendes Interactives

  myChart.legends = [];
  svg.selectAll("title_text")
          .data(["Cliquez sur la légende","pour cacher ou afficher", "les différents pays:"])
          .enter()
          .append("text")
            .attr("x", 0)
            .attr("y", function (d, i) { return 41 + i * 14; })
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function (d) { return d; });

  var filterValues = dimple.getUniqueValues(table, "Pays");
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
          d3.select(this).style("opacity", 0.8);
        }
        filterValues = newFilters;
        myChart.data = dimple.filterData(table, "Pays", filterValues);

        myChart.draw(800);
      });