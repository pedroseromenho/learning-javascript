var t2 = document.getElementById("table2"); // table
var trs2 = t2.getElementsByTagName("tr"); //row
let table2 = [];
 
// Tableau 2

  for (var i=1; i<trs2.length; i++){
    for (var j=1; j<trs2[i].children.length; j++){
      if(j==2){
        table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'Date': trs2[0].children[2].innerText});
      }else if(j==3){
        table2.push({'Pays': trs2[i].children[1].innerText, 'Population Carcérale':parseInt(trs2[i].children[j].innerText), 'Date': trs2[0].children[3].innerText});
      }
    }
  }

// Graphic 2  

var svg = dimple.newSvg("#chartContainer1", "100%", 550);
data = table2;
  var myChart2 = new dimple.chart(svg, data);
  myChart2.setBounds(60, 30, "90%", 330);
  myChart2.addCategoryAxis("x", ['Pays','Date']);
  myChart2.addMeasureAxis("y", "Population Carcérale");
  myChart2.addSeries('Date', dimple.plot.bar);
  var myLegend2 = myChart2.addLegend(65, 10, 510, 20, "right");
  myChart2.defaultColors = [
    new dimple.color("rgba(255, 0, 0, 0.2)"),
    new dimple.color("rgba(255, 0, 0, 0.8)")
  ]; 
  myChart2.draw();


// Légendes 2 

  myChart2.legends = [];
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

  var filterValues2 = dimple.getUniqueValues(table2, 'Date');
  myLegend2.shapes.selectAll("rect")
      .on("click", function (e) {
        var hide2 = false;
        var newFilters2 = [];
        filterValues2.forEach(function (f) {
          if (f === e.aggField.slice(-1)[0]) {
            hide2 = true;
          } else {
            newFilters2.push(f);
          }
        });
        if (hide2) {
          d3.select(this).style("opacity", 0.1);
        } else {
          newFilters2.push(e.aggField.slice(-1)[0]);
          d3.select(this).style("opacity", 1);
        }
        filterValues2 = newFilters2;
        myChart2.data = dimple.filterData(table2, 'Date', filterValues2);

        myChart2.draw(800);
      });