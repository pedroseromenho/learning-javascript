<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="http://d3js.org/d3.v4.min.js"></script>
  <script src="http://dimplejs.org/dist/dimple.v2.3.0.min.js"></script>
</head>
<body>
    <script type="text/javascript">
      var svg = dimple.newSvg("body", 800, 600);
      var data = [
        { "Word":"Hello", "Awesomeness":2000 },
        { "Word":"World", "Awesomeness":3000 }
      ];
      var chart = new dimple.chart(svg, data);
      chart.addCategoryAxis("x", "Word");
      chart.addMeasureAxis("y", "Awesomeness");
      chart.addSeries(null, dimple.plot.bar);
      chart.draw();
    </script>
  
</body>
</html>
