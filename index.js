var svg = dimple.newSvg(".zinger", 800, 600);
d3.csv("titanic-data.csv",function(data){
    var females = data.filter(d => d.Sex == 'female');
    var males = data.filter(d => d.Sex == 'male');

    var femaleSurvivalRate = females.filter(elt => elt.Survived == 1).length / females.length;
    var maleSurvivalRate = males.filter(elt => elt.Survived == 1).length / males.length;

    var data_final = [
      { "Sex":"Male", "Survival Rate": femaleSurvivalRate },
      { "Sex":"Female", "Survival Rate": maleSurvivalRate }
      ];
    var chart = new dimple.chart(svg,data_final);
    console.log(data_final);
    chart.addCategoryAxis("x", "Sex");
    chart.addMeasureAxis("y", "Survival Rate").overrideMax = 1;
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();
});
