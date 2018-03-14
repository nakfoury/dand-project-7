// Declare the Dimple SVG in which to draw the chart
var svg = dimple.newSvg(".zinger", 800, 600);
d3.csv("titanic-data.csv",function(data){
    var chart = new dimple.chart(svg,data);
    // Add the x axis categories to the chart
    var c = chart.addCategoryAxis("x", ["Pclass", "Sex"]);
    c.title = "Fare Class";
    // Add the y axis label
    var m = chart.addMeasureAxis("y", "Survived");
    m.overrideMax = 1;
    m.title = "Survival Rate";
    // Calculate the aggregated average survival rate for each category
    var s = chart.addSeries("Sex", dimple.plot.bar);
    s.aggregate = dimple.aggregateMethod.avg;
    // Update tooltip text with helpful data
    s.getTooltipText = function(e) {
        return ["Survival Rate: " + e.y.toFixed(3),
                "Total Passengers: " + e.yCount,
                "Surviving Passengers: " + Math.round(e.y * e.yCount)];
    };
    chart.addLegend(65, 10, 510, 20, "right");
    chart.draw();
});
