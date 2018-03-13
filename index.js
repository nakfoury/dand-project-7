var svg = dimple.newSvg(".zinger", 800, 600);
d3.csv("titanic-data.csv",function(data){
    var chart = new dimple.chart(svg,data);
    var c = chart.addCategoryAxis("x", ["Pclass", "Sex"]);
    c.title = "Fare Class";
    var m = chart.addMeasureAxis("y", "Survived");
    m.overrideMax = 1;
    m.title = "Survival Rate";
    var s = chart.addSeries("Sex", dimple.plot.bar);
    s.aggregate = dimple.aggregateMethod.avg;
    s.getTooltipText = function(e) {
        return ["Survival Rate: " + e.y.toFixed(3),
                "Total Passengers: " + e.yCount,
                "Surviving Passengers: " + Math.round(e.y * e.yCount)];
    };
    chart.addLegend(65, 10, 510, 20, "right");
    chart.draw();
});
