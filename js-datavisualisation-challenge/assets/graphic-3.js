var dataPoints = [];
$.getJSON("https://inside.becode.org/api/v1/data/random.json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    var svg = dimple.newSvg("#content", "100%", 550);
  data = dataPoints;
  var myChart3 = new dimple.chart(svg, data);
  myChart3.setBounds(60, 30, "90%", 330);
  myChart3.addCategoryAxis("x", ['Pays','Date']);
  myChart3.addMeasureAxis("y", "Population Carcérale");
  myChart3.addSeries('Date', dimple.plot.bar);
  var myLegend2 = myChart3.addLegend(65, 10, 510, 20, "right"); 
  myChart3.draw();
    chart.render();
    updateChart();
});


function updateChart() {
  $.getJSON("https://inside.becode.org/api/v1/data/random.json" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
      $.each(data, function(key, value) {
          dataPoints.push({
              x: parseInt(value[0]),
              y: parseInt(value[1])
          });
     });
     chart.render();
     setTimeout(function(){updateChart()}, 1000);
  });
}

console.log(dataPoints);

// Graphic 2  