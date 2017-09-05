var swapped = false;

function swapShifts(){

  if ( swapped == false ) {
    $('.csurplus').addClass('cmoved');
    $('.cdeficit').addClass('csurplus');
    $('.passend').addClass('fillPassend');
    $('.unpassend').addClass('fillUnpassend');
    swapped = true;
} else {
    $('.csurplus.cmoved').removeClass('cmoved');
    $('.cdeficit.csurplus').removeClass('csurplus');
    $('.passend.fillPassend').removeClass('fillPassend');
    $('.unpassend.fillUnpassend').removeClass('fillUnpassend');
    swapped = false;
}
//console.log(swapped);
};

$( ".swap" ).click(function() {
  swapShifts();

});

var w = 1060,
h = 400,
padding = 25;

var percentArray = [];

//console.log(percentArray);
//function drawLineDiagram(){
var dataset = [
  [1, (Math.round(Math.random() * 50) + 50)],
  [2, (Math.round(Math.random() * 50) + 50)],
  /*[3, (Math.round(Math.random() * 50) + 50)],
  [4, (Math.round(Math.random() * 50) + 50)],
  [5, (Math.round(Math.random() * 50) + 50)],
  [6, (Math.round(Math.random() * 50) + 50)],
  [7, (Math.round(Math.random() * 50) + 50)],
  [8, (Math.round(Math.random() * 50) + 50)],
  [9, (Math.round(Math.random() * 50) + 50)],
  [10, (Math.round(Math.random() * 50) + 50)],
  [11, (Math.round(Math.random() * 50) + 50)],
  [12, (Math.round(Math.random() * 50) + 50)],
  [13, (Math.round(Math.random() * 50) + 50)],
  [14, (Math.round(Math.random() * 50) + 50)],
  [15, (Math.round(Math.random() * 50) + 50)],
  [16, (Math.round(Math.random() * 50) + 50)],
  [17, (Math.round(Math.random() * 50) + 50)],
  [18, (Math.round(Math.random() * 50) + 50)],
  [19, (Math.round(Math.random() * 50) + 50)],
  [20, (Math.round(Math.random() * 50) + 50)],
  [21, (Math.round(Math.random() * 50) + 50)],
  [22, (Math.round(Math.random() * 50) + 50)],
  [23, (Math.round(Math.random() * 50) + 50)],
  [24, (Math.round(Math.random() * 50) + 50)],
  [25, (Math.round(Math.random() * 50) + 50)],
  [26, (Math.round(Math.random() * 50) + 50)],
  [27, (Math.round(Math.random() * 50) + 50)],
  [28, (Math.round(Math.random() * 50) + 50)],
  [29, (Math.round(Math.random() * 50) + 50)],
  [30, (Math.round(Math.random() * 50) + 50)],
  [31, (Math.round(Math.random() * 50) + 50)],
  [32, (Math.round(Math.random() * 50) + 50)],
  [33, (Math.round(Math.random() * 50) + 50)],
  [34, (Math.round(Math.random() * 50) + 50)],
  [35, (Math.round(Math.random() * 50) + 50)],
  [36, (Math.round(Math.random() * 50) + 50)],
  [37, (Math.round(Math.random() * 50) + 50)],
  [38, (Math.round(Math.random() * 50) + 50)],
  [39, (Math.round(Math.random() * 50) + 50)],
  [40, (Math.round(Math.random() * 50) + 50)],
  [41, (Math.round(Math.random() * 50) + 50)],
  [42, (Math.round(Math.random() * 50) + 50)],
  [43, (Math.round(Math.random() * 50) + 50)],
  [44, (Math.round(Math.random() * 50) + 50)],
  [45, (Math.round(Math.random() * 50) + 50)],
  [46, (Math.round(Math.random() * 50) + 50)],
  [47, (Math.round(Math.random() * 50) + 50)],
  [48, (Math.round(Math.random() * 50) + 50)],
  [49, (Math.round(Math.random() * 50) + 50)],
  [50, (Math.round(Math.random() * 50) + 50)],
  [51, (Math.round(Math.random() * 50) + 50)],
  [52, (Math.round(Math.random() * 50) + 50)]*/
];

var datasetIndividual = [
  [1, (Math.round(Math.random() * 50) + 50)],
  [2, (Math.round(Math.random() * 50) + 50)],
  [3, (Math.round(Math.random() * 50) + 50)],
  [4, (Math.round(Math.random() * 50) + 50)],
  [5, (Math.round(Math.random() * 50) + 50)],
  [6, (Math.round(Math.random() * 50) + 50)],
  [7, (Math.round(Math.random() * 50) + 50)],
  [8, (Math.round(Math.random() * 50) + 50)],
  [9, (Math.round(Math.random() * 50) + 50)],
  [10, (Math.round(Math.random() * 50) + 50)],
  [11, (Math.round(Math.random() * 50) + 50)],
  [12, (Math.round(Math.random() * 50) + 50)],
  [13, (Math.round(Math.random() * 50) + 50)],
  [14, (Math.round(Math.random() * 50) + 50)],
  [15, (Math.round(Math.random() * 50) + 50)],
  [16, (Math.round(Math.random() * 50) + 50)],
  [17, (Math.round(Math.random() * 50) + 50)],
  [18, (Math.round(Math.random() * 50) + 50)],
  [19, (Math.round(Math.random() * 50) + 50)],
  [20, (Math.round(Math.random() * 50) + 50)],
  [21, (Math.round(Math.random() * 50) + 50)],
  [22, (Math.round(Math.random() * 50) + 50)],
  [23, (Math.round(Math.random() * 50) + 50)],
  [24, (Math.round(Math.random() * 50) + 50)],
  [25, (Math.round(Math.random() * 50) + 50)],
  [26, (Math.round(Math.random() * 50) + 50)],
  [27, (Math.round(Math.random() * 50) + 50)],
  [28, (Math.round(Math.random() * 50) + 50)],
  [29, (Math.round(Math.random() * 50) + 50)],
  [30, (Math.round(Math.random() * 50) + 50)],
  [31, (Math.round(Math.random() * 50) + 50)],
  [32, (Math.round(Math.random() * 50) + 50)],
  [33, (Math.round(Math.random() * 50) + 50)],
  [34, (Math.round(Math.random() * 50) + 50)],
  [35, (Math.round(Math.random() * 50) + 50)],
  [36, (Math.round(Math.random() * 50) + 50)],
  [37, (Math.round(Math.random() * 50) + 50)],
  [38, (Math.round(Math.random() * 50) + 50)],
  [39, (Math.round(Math.random() * 50) + 50)],
  [40, (Math.round(Math.random() * 50) + 50)],
  [41, (Math.round(Math.random() * 50) + 50)],
  [42, (Math.round(Math.random() * 50) + 50)],
  [43, (Math.round(Math.random() * 50) + 50)],
  [44, (Math.round(Math.random() * 50) + 50)],
  [45, (Math.round(Math.random() * 50) + 50)],
  [46, (Math.round(Math.random() * 50) + 50)],
  [47, (Math.round(Math.random() * 50) + 50)],
  [48, (Math.round(Math.random() * 50) + 50)],
  [49, (Math.round(Math.random() * 50) + 50)],
  [50, (Math.round(Math.random() * 50) + 50)],
  [51, (Math.round(Math.random() * 50) + 50)],
  [52, (Math.round(Math.random() * 50) + 50)]
];

function updateLineChart(){

//d3.select('.linechart').remove();

/*create svg element*/
var svg = d3.select('.linechart')
.append('svg')
.attr('width', w)
.attr('height', h)
.attr('id', 'chart');

/*x scale*/
var xScale = d3.scale.linear()
/*.domain([0, d3.max(dataset, function(d) {
  return d[0];
})])*/
.domain([0, 52])
.range([padding, w - padding]);

/*y scale*/
var yScale = d3.scale.linear()
.domain([0, d3.max(dataset, function(d) {
  return d[1];
})])
.range([h - padding, padding]);

/*x axis*/
var xAxis = d3.svg.axis()
.scale(xScale)
.orient('bottom')
.ticks(20)
.tickSize(0, 0)
//.tickPadding(padding);

/*append x axis*/
svg.append('g')
.attr({
  'class': 'xaxis',
  //'transform': 'translate(0,' + (h - padding) + ')'
  'transform': 'translate(0,' + 0 + ')'
})
.call(xAxis);

/*y axis*/
var yAxis = d3.svg.axis()
.scale(yScale)
.orient('left')
.tickSize(0, 0)
.tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

/*append y axis*/
svg.append('g')
.attr({
  'class': 'yaxis',
  'transform': 'translate(' + padding + ',0)'
})
.call(yAxis);


//d3.selectAll("path").remove();
//d3.selectAll("points").remove();

/*define line*/
var lines = d3.svg.line()
.x(function(d) {
  return xScale(d[0])
})
.y(function(d) {
  return yScale(d[1])
})
.interpolate('monotone');


/*append line*/




var path = svg.append('path')
.attr({
  'd': lines(dataset),
  'fill': 'none',
  'class': 'lineChart'
});

/*get length*/
var length = svg.select('.lineChart').node().getTotalLength();

/*animate line chart*/
svg.select('.lineChart')
.attr("stroke-dasharray", length + " " + length)
.attr("stroke-dashoffset", length)
.transition()
.ease('linear')
.delay(function(d) {
  return dataset.length * 100;
})
.duration(3000)
.attr("stroke-dashoffset", 0);

/*add points*/
var points = svg.selectAll('circle')
.data(dataset)
.enter()
.append('circle');

/*point attributes*/
points.attr('cy', function(d) {
  return yScale(d[1])
})
.style('opacity', 0)
.transition()
.duration(1000)
.ease('elastic')
.delay(function(d, i) {
  return i * 100;
})
.attr({
  'cx': function(d) {
    return xScale(d[0]);
  },
  'cy': function(d) {
    return yScale(d[1]);
  },
  'r': 5,
  'class': 'datapoint',
  'id': function(d, i) {
    return i;
  }
})


.style('opacity', 1);


var mouseG = svg.append("g")
.attr("class", "mouse-over-effects");

mouseG.append("path") // this is the white vertical line to follow mouse
.attr("class", "mouse-line")
.style("stroke", "white")
.style("stroke-width", "1px")
.style("opacity", "0");

var linesForMouse = document.getElementsByClassName('lineChart');
var linesIndividualForMouse = document.getElementsByClassName('lineChartIndividual');

var mousePerLine = mouseG.selectAll('.mouse-per-line')
.data(dataset)
.enter()
.append("g")
.attr("class", "mouse-per-line");

mousePerLine.append("circle")
.attr("r", 7)
.style("stroke", "#A0B1AB")
.style("fill", "none")
.style("stroke-width", "1px")
.style("opacity", "0");

mousePerLine.append("text")
.attr("transform", "translate(10,3)");

mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
.attr('width', w) // can't catch mouse events on a g element
.attr('height', h)
.attr('fill', 'none')
.attr('pointer-events', 'all')
.on('mouseout', function() { // on mouse out hide line, circles and text
  d3.select(".mouse-line")
  .style("opacity", "0");
  d3.selectAll(".mouse-per-line circle")
  .style("opacity", "0");
  d3.selectAll(".mouse-per-line text")
  .style("opacity", "0");
})
.on('mouseover', function() { // on mouse in show line, circles and text
  d3.select(".mouse-line")
  .style("opacity", "1");
  d3.selectAll(".mouse-per-line circle")
  .style("opacity", "1");
  d3.selectAll(".mouse-per-line text")
  .style("opacity", "1");
})
.on('mousemove', function() { // mouse moving over canvas
  var mouse = d3.mouse(this);
  d3.select(".mouse-line")
  .attr("d", function() {
    var d = "M" + mouse[0] + "," + height;
    d += " " + mouse[0] + "," + 0;
    return d;
  });

  d3.selectAll(".mouse-per-line")
  .attr("transform", function(d, i) {
    //console.log(w/mouse[0])
    //var xDate = xScale.invert(mouse[0]),
    //bisect = d3.bisector(function(d) { return d.date; }).right;
    //		idx = bisect(d.values, xDate);

    var beginning = 0,
    end = length,
    target = null
    //console.log(end);

    while (true) {
      target = Math.floor((beginning + end) / 2);
      //pos = linesForMouse[i].getPointAtLength(target);
      pos = svg.select('.lineChart').node().getPointAtLength(target);
      //console.log(pos);
      if ((target === end || target === beginning) && pos.x !== mouse[0]) {
        break;
      }
      if (pos.x > mouse[0]) end = target;
      else if (pos.x < mouse[0]) beginning = target;
      else break; //position found
    }

    d3.select(this).select('text')
    .text(yScale.invert(pos.y).toFixed(2))
    .attr("fill", "#fff");

    return "translate(" + mouse[0] + "," + pos.y + ")";
  });
});

//	LINES INDIVIDUAL
function drawIndividualLines (){

  /*define line*/
  var linesIndividual = d3.svg.line()
  .x(function(d) {
    return xScale(d[0])
  })
  .y(function(d) {
    return yScale(d[1])
  })
  .interpolate('monotone');

  /*append line*/
  var pathIndividual = svg.append('path')
  .attr({
    //'d': linesIndividual(datasetIndividual),
    'd': linesIndividual(datasetIndividual),
    'fill': 'none',
    'class': 'lineChartIndividual'
  });

  /*get length*/
  var lengthIndividual = svg.select('.lineChartIndividual').node().getTotalLength();

  /*animate line chart*/
  svg.select('.lineChartIndividual')
  .attr("stroke-dasharray", lengthIndividual + " " + lengthIndividual)
  .attr("stroke-dashoffset", lengthIndividual)
  .transition()
  .ease('linear')
  .delay(function(d) {
    return datasetIndividual.length * 100;
  })
  .duration(3000)
  .attr("stroke-dashoffset", 0);

  /*add points*/
  var pointsIndividual = svg.selectAll('circleIndividual')
  .data(datasetIndividual)
  .enter()
  .append('circle');

  /*point attributes*/
  pointsIndividual.attr('cy', function(d) {
    return yScale(d[1])
  })
  .style('opacity', 0)
  .transition()
  .duration(1000)
  .ease('elastic')
  .delay(function(d, i) {
    return i * 100;
  })
  .attr({
    'cx': function(d) {
      return xScale(d[0]);
    },
    'cy': function(d) {
      return yScale(d[1]);
    },
    'r': 5,
    'class': 'datapointIndividual',
    'id': function(d, i) {
      return i;
    }
  })

  .style('opacity', 1);
};

function deleteIndividualLines(){
  svg.selectAll(".datapointIndividual").remove();
  svg.selectAll(".lineChartIndividual").remove();
  //meter.selectAll("text").remove();
  //console.log("ok");
};

$(".individual").click(function() {

  swapShifts();

  if(swapped == true){
    drawIndividualLines();
    drawIndividualLegend();
  }else {
  deleteIndividualLines();
};

});





};

function deleteLineChart(){
  d3.select('#chart').remove();
};

updateLineChart();



// LEGEND

var legend = d3.select(".legend-1")
.append('svg')
.attr('width', 500)
.attr('height', 45)
.attr('id', 'legend-1');

legend.append('circle')
.attr('class', 'datapoint')
.attr('r', '5')
.attr("cx", 10)
.attr("cy", 25);

legend.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "0em")
.text("ø Wunscherfüllungsgrad")
.style("fill", "white");
legend.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "1.4em")
.text("aller Fahrer pro Woche")
.style("fill", "white");


function drawIndividualLegend(){
legend.append('circle')
.attr('class', 'datapointIndividual')
.attr('r', '5')
.attr("cx", 230)
.attr("cy", 25);

legend.append("text")
.attr("class", "calendarWeek")
.attr("x", 245)
.attr("y", 20)
.attr("dy", "0em")
.text("Ihr ø Wunscherfüllungsgrad")
.style("fill", "white");

legend.append("text")
.attr("class", "calendarWeek")
.attr("x", 245)
.attr("y", 20)
.attr("dy", "1.4em")
.text("pro Woche")
.style("fill", "white");

legend2 = d3.select("#legend-2")
.attr('hidden', true);

legend3 = d3.select("#legend-3")
.attr('hidden', null);

};



// LEGEND-2

var legend2 = d3.select(".legend-2")
.append('svg')
.attr('width', 800)
.attr('height', 45)
.attr('id', 'legend-2')
.attr('hidden', null);

legend2.append('circle')
.attr('class', 'datapoint deficit')
.attr('r', '4')
.attr("cx", 10)
.attr("cy", 25);

legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "0em")
.text("Benötigte Dienste")
.style("fill", "white");

legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "1.4em")
.text("früh (F) | mittel (M) | spät (S) | geteilt (G)")
.style("fill", "white");


legend2.append('circle')
.attr('class', 'surplus')
.attr('r', '4')
.attr("cx", 280)
.attr("cy", 25);

legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 295)
.attr("y", 20)
.attr("dy", "0em")
.text("Wunschprofilüberschuss")
.style("fill", "white");

legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 295)
.attr("y", 20)
.attr("dy", "1.4em")
.text("je Dienst")
.style("fill", "white");


legend2.append('circle')
.attr('class', 'cmatch')
.attr('r', '4')
.attr("cx", 470)
.attr("cy", 25);

legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 485)
.attr("y", 20)
.attr("dy", "0em")
.text("Übereinstimmung mit")
.style("fill", "white");


legend2.append("text")
.attr("class", "calendarWeek")
.attr("x", 485)
.attr("y", 20)
.attr("dy", "1.4em")
.text("Wunschprofil")
.style("fill", "white");


// LEGEND-3

var legend3 = d3.select(".legend-3")
.append('svg')
.attr('width', 800)
.attr('height', 45)
.attr('id', 'legend-3')
.attr('hidden', true);

legend3.append('circle')
.attr('class', 'datapoint cmoved')
.attr('r', '4')
.attr("cx", 10)
.attr("cy", 25);

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "0em")
.text("Umverteilter")
.style("fill", "white");


legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 25)
.attr("y", 20)
.attr("dy", "1.4em")
.text("Wunschprofilüberschuss")
.style("fill", "white");


legend3.append('circle')
.attr('class', 'cmatch')
.attr('r', '4')
.attr("cx", 200)
.attr("cy", 25);

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 215)
.attr("y", 20)
.attr("dy", "0em")
.text("Übereinstimmung mit")
.style("fill", "white");

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 215)
.attr("y", 20)
.attr("dy", "1.4em")
.text("Wunschprofil")
.style("fill", "white");


legend3.append('circle')
.attr('class', 'individualMatch')
.attr('r', '4')
.attr("cx", 370)
.attr("cy", 25);

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 385)
.attr("y", 20)
.attr("dy", "0em")
.text("Ihre Einplanung")
.style("fill", "white");

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 385)
.attr("y", 20)
.attr("dy", "1.4em")
.text("gemäß Wunschprofil")
.style("fill", "white");

legend3.append('circle')
.attr('class', 'individualMismatch')
.attr('r', '4')
.attr("cx", 530)
.attr("cy", 25);

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 545)
.attr("y", 20)
.attr("dy", "0em")
.text("Ihre Einplanung")
.style("fill", "white");

legend3.append("text")
.attr("class", "calendarWeek")
.attr("x", 545)
.attr("y", 20)
.attr("dy", "1.4em")
.text("entgg. Wunschprofil")
.style("fill", "white");


/*
--------------------------------
------- DONUTÜBERSICHT --------
--------------------------------

Donutdiagramme für die Zufriedenheitsvisualisierung

*/

var colors = {
  'green': '#00F19F',
  'red':'#E98A82',
  'white':'#ffffff',
  'steel':'#A0B1AB',
  'steelFalse':'#4F5855',
  'backgroundColor':'#303030'
};

var green = colors.green;
var red = colors.red;
var white = colors.white;
var steel = colors.steel;
var steelFalse = colors.steelFalse;
var backgroundColor = colors.backgroundColor;


var circleradius = 60;
var border = 18;
var padding = 30;
var margin = 40;
var startPercent = 0;
var full = 1;

var twoPi = Math.PI * 2;
var formatPercent = d3.format('.0%');
var boxSize = (circleradius + padding) * 2;
var circleHeight = 200;


var xPosDonut = 900;
var marginDonut = 180;
var marginDonutBeschriftung = 45;

/*
--------------------------------
------- WOCHENÜBERSICHT --------
--------------------------------

Balkendiagramme zum vergleich von
Schichtdichte auf Mitarbeiteranzahl

*/

var width = 1080;
var height = 440;




//var clicks = 1;
//Tage untereinander, muss translate angepasst werden (Bsp. Tag1 und Tag2)
var paddingTag = 130;

// Kreise in Y-Achse zueinander
var kreisZuKreis = 12;

var test = 5;

//Abstand zum zweiten Teil der jweiligen Schichtart (Bsp. 1. Teil früh zu 2. Teil früh)
//Auf der X-Achse
var zweiteHälfte = 12;

var topdown = 350;
// Abstand von einer Schichtart zu anderen (Bsp.: Früh zu Mitte)
var paddingSchichtart = 30;

// Radius der Kreise
var radius = 4;


var cDelay = 750;

// Counter zum Hochzählen der Wochen und der neuen Wochen-CSV Dateien
var counter = 2;
var counterGesamt = 2;
/*var counterTwo = 1;
var counterThree = 2;*/

//unwichtig, wird hier nur zusammengerechnt
var paddingMitte = paddingSchichtart;
var paddingSpät = paddingSchichtart + paddingSchichtart;
var paddingGeteilt = paddingSchichtart + paddingSchichtart + paddingSchichtart;


$( ".addWeek" ).click(function() {
  //window.location.reload();
  //deleteLineChart();

  updateLineChart();
  deleteLineChart();
  //deleteIndividualLines();

  counter += 1;
  counterGesamt += 1;

  if (counter > 6) {
    counter = 1
  }

  //console.log("counter: "+counter);

  // An dieser Stelle klammer für onClick funktion auskommenteiren und in Zeile
  // 536 einkommentieren
  //}
  //Woche eins
  var chart = d3.select(".one").insert("svg","svg")
  .attr("width", width)
  .attr("height",height);


  d3.csv("data/template/csv/week"+counter+".csv", function(error, data){







  function drawIndividualDonut (){




      //console.log(passend+"+"+unpassend+"+"+gesamt);

      //console.log(prozent);
      //
      /*data.forEach(function(d) {
        index++;
      });
      */


  //console.log(endPercent);


  var arc = d3.svg.arc()

  .startAngle(0)

  .innerRadius(circleradius)
  .outerRadius(circleradius - border);

  var parent = chart.selectAll("parent")
  .data(data)
  .enter().append("svg");

  var svg = chart.append('svg')
  .attr('width', boxSize)
  .attr('height', circleHeight)
  .attr("x", xPosDonut)
  .attr("y", marginDonut);

  var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');

  var meter = g.append('g')
  .attr('class', 'progress-meter');

  meter.append('path')
  .attr('class', 'background')
  .attr('fill', backgroundColor)
  .attr('fill-opacity', 1)
  .attr('d', arc.endAngle(twoPi));

function drawBackground(){
  meter.selectAll("path").remove();
  meter.selectAll("text").remove();

  meter.append('path')
  .attr('class', 'background')
  .attr('fill', backgroundColor)
  .attr('fill-opacity', 1)
  .attr('d', arc.endAngle(twoPi));

};

  var passend = 0;

  data.forEach(function(d) {
        if(d.Frühschicht_Status == "passend"){
        passend++;
      };
  });

  function drawIndividualValue (){



    var gesamt = 7;

    var prozent = (passend*100)/gesamt;
    endPercent = (prozent/100);

    console.log(passend);

    var count = Math.abs((endPercent - startPercent) / 0.01);
    var countTwo = Math.abs((full - startPercent) / 0.01);

    var step = endPercent < startPercent ? -0.01 : 0.01;
    var stepTwo = full < startPercent ? -0.01 : 0.01;

    meter.selectAll("path").remove();
    meter.selectAll("text").remove();

    meter.append('path')
    .attr('class', 'background')
    .attr('fill', backgroundColor)
    .attr('fill-opacity', 1)
    .attr('d', arc.endAngle(twoPi));


    //Donut Beschriftung
    meter.append("text")
    .attr("x", 110)
    .attr("y", -45 - marginDonutBeschriftung)
    .attr("dy", "0em")
    .text("Ihr Wunscherfüllungs-")
    .style("fill", "white");

    //Donut Beschriftung
    meter.append("text")
    .attr("x", 110)
    .attr("y", -45 - marginDonutBeschriftung)
    .attr("dy", "1.4em")
    .text("grad in %")
    .style("fill", "white");

  //meter.selectAll("path").remove();

  var middle = meter.append('path')
  .attr('class', 'middle')
  .attr('fill', red)
  .attr('fill-opacity', 1);

  var foreground = meter.append('path')
  .attr('class', 'foreground')
  .attr('fill', green)
  .attr('fill-opacity', 1);

  var numberText = meter.append('text')
  .attr('fill', white)
  .attr("text-anchor", "middle")
  .attr('dx', '115')
  .attr('dy', '.35em');



    var progress = 0;
    var progressTwo = 0;

    progress = startPercent;
    progressTwo = startPercent;

    function updateProgress(progress) {
      // middle.attr('d', arc.endAngle(twoPi * progressTwo));
      foreground.attr('d', arc.endAngle(twoPi * progress));
      numberText.text(formatPercent(progress));
    }

    function updateProgressTwo(progressTwo) {
      middle.attr('d', arc.endAngle(twoPi * progressTwo));
      // foreground.attr('d', arc.endAngle(twoPi * progress));
      //numberText.text(formatPercent(progress));
    }



    (
      function loops() {
        updateProgress(progress);
        updateProgressTwo(progressTwo);

        if (countTwo > 0) {
          countTwo--;
          // progress += step;
          progressTwo += stepTwo;
          setTimeout(loops, 10);
        }

        if (count > 0) {
          count--;
          progress += step;
          // progressTwo += stepTwo;
          // setTimeout(loops, 10);
        }
      })
      ();

      //  drawIndividualDonut();

    };

    $( ".individual" ).click(function() {
      if(swapped ==true){
      drawIndividualValue();
    }else {
      drawBackground();
    };
      //drawIndividualDonut();

      $("h1").text("Individuelle Übersicht");
    });

  //};
};
  function drawDonut (){

    var passend =
    (d3.sum(data, function(d){return d.Frühschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Mittelschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Spätschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Geteilt_gedeckt;})
  );

  var unpassend =
  (d3.sum(data, function(d){return d.Frühschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Frühschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Mittelschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Mittelschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Spätschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Spätschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Geteilt_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Geteilt_Mitarbeiterüberschuss; })
);

var gesamt = passend + unpassend;

var prozent = (passend*100)/gesamt;

dataset.push([(counterGesamt),Math.round(prozent)]);
console.log(dataset);

//console.log(passend+"+"+unpassend+"+"+gesamt);

//console.log(prozent);

var endPercent = (prozent/100);
//console.log(endPercent);
var count = Math.abs((endPercent - startPercent) / 0.01);
var countTwo = Math.abs((full - startPercent) / 0.01);

var step = endPercent < startPercent ? -0.01 : 0.01;
var stepTwo = full < startPercent ? -0.01 : 0.01;
var arc = d3.svg.arc()
.startAngle(0)
.innerRadius(circleradius)
.outerRadius(circleradius - border);

var parent = chart.selectAll("parent")
.data(data)
.enter().append("svg");

var svg = chart.append('svg')
.attr('width', boxSize)
.attr('height', circleHeight)
.attr("x", xPosDonut)
.attr("Y", marginDonut);

var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2) + marginDonutBeschriftung + ')'); //Dieser Scheint einer zu viel zu sein

var meter = g.append('g')
.attr('class', 'progress-meter');

meter.append('path')
.attr('class', 'background')
.attr('fill', backgroundColor)
.attr('fill-opacity', 1)
.attr('d', arc.endAngle(twoPi));

var middle = meter.append('path')
.attr('class', 'middle')
.attr('fill', red)
.attr('fill-opacity', 1);

var foreground = meter.append('path')
.attr('class', 'foreground')
.attr('fill', green)
.attr('fill-opacity', 1);

var numberText = meter.append('text')
.attr('fill', white)
.attr("text-anchor", "middle")
.attr('dx', '115')
.attr('dy', '.35em');

function updateProgress(progress) {
  // middle.attr('d', arc.endAngle(twoPi * progressTwo));
  foreground.attr('d', arc.endAngle(twoPi * progress));
  numberText.text(formatPercent(progress));
}

function updateProgressTwo(progressTwo) {
  middle.attr('d', arc.endAngle(twoPi * progressTwo));
  // foreground.attr('d', arc.endAngle(twoPi * progress));
  //numberText.text(formatPercent(progress));
}

var progress = startPercent;
var progressTwo = startPercent;

(
  function loops() {
    updateProgress(progress);
    updateProgressTwo(progressTwo);

    if (countTwo > 0) {
      countTwo--;
      // progress += step;
      progressTwo += stepTwo;
      setTimeout(loops, 10);
    }

    if (count > 0) {
      count--;
      progress += step;
      // progressTwo += stepTwo;
      // setTimeout(loops, 10);
    }
  })
  ();
};

drawDonut();

drawIndividualDonut();




var passend =  (d3.sum(data, function(d){return d.Frühschicht_gedeckt;})
+
d3.sum(data, function(d){return d.Mittelschicht_gedeckt;})
+
d3.sum(data, function(d){return d.Spätschicht_gedeckt;})
+
d3.sum(data, function(d){return d.Geteilt_gedeckt;})
);

var unpassend =   (d3.sum(data, function(d){return d.Frühschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Frühschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Mittelschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Mittelschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Spätschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Spätschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Geteilt_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Geteilt_Mitarbeiterüberschuss; })
);

var gesamt = passend + unpassend;

var prozent = (passend*100)/gesamt;

//console.log(passend+"+"+unpassend+"+"+gesamt);

//console.log(prozent);


var endPercent = (prozent/100);
//console.log(endPercent);
var count = Math.abs((endPercent - startPercent) / 0.01);
var countTwo = Math.abs((full - startPercent) / 0.01);

var step = endPercent < startPercent ? -0.01 : 0.01;
var stepTwo = full < startPercent ? -0.01 : 0.01;
var arc = d3.svg.arc()
.startAngle(0)
.innerRadius(circleradius)
.outerRadius(circleradius - border);

var parent = chart.selectAll("parent")
.data(data)
.enter().append("svg");

var svg = chart.append('svg')
.attr('width', boxSize)
.attr('height', circleHeight)
.attr("x", xPosDonut);


var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');


var meter = g.append('g')

.attr('class', 'progress-meter');

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45 - marginDonutBeschriftung)
.attr("dy", "0em")
.text("Wunscherfüllungsgrad")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45 - marginDonutBeschriftung)
.attr("dy", "1.4em")
.text("aller Fahrer in %")
.style("fill", "white");

meter.append('path')
.attr('class', 'background')
.attr('fill', backgroundColor)
.attr('fill-opacity', 1)
.attr('d', arc.endAngle(twoPi));

var middle = meter.append('path')
.attr('class', 'middle')
.attr('fill', steelFalse)
.attr('fill-opacity', 1);

var foreground = meter.append('path')
.attr('class', 'foreground')
.attr('fill', steel)
.attr('fill-opacity', 1);

var numberText = meter.append('text')
.attr('fill', white)
.attr("text-anchor", "middle")
.attr('dx', '115')
.attr('dy', '.35em');

function updateProgress(progress) {
  // middle.attr('d', arc.endAngle(twoPi * progressTwo));
  foreground.attr('d', arc.endAngle(twoPi * progress));
  numberText.text(formatPercent(progress));
}

function updateProgressTwo(progressTwo) {
  middle.attr('d', arc.endAngle(twoPi * progressTwo));
  // foreground.attr('d', arc.endAngle(twoPi * progress));
  //numberText.text(formatPercent(progress));
}

var progress = startPercent;
var progressTwo = startPercent;

(
  function loops() {
    updateProgress(progress);
    updateProgressTwo(progressTwo);

    if (countTwo > 0) {
      countTwo--;
      // progress += step;
      progressTwo += stepTwo;
      setTimeout(loops, 10);
    }

    if (count > 0) {
      count--;
      progress += step;
      // progressTwo += stepTwo;
      // setTimeout(loops, 10);
    }
  })
  ();

  // Schichtvisualisierung //

  var passend = chart.selectAll("passend")
  .data(data)
  .enter().insert("svg")
  .attr("class", "cmatch");

  var mitarbeiterüberschuss = chart.selectAll("überschuss")
  .data(data)
  .enter().insert("svg")
  .attr("class", "csurplus");

  var mitarbeitermangel = chart.selectAll("mangel")
  .data(data)
  .enter().insert("svg")
  .attr("class", "cdeficit");

  var text = chart.select("svg")
  .selectAll("text")
  .data(data).enter();

  //Kalenderwoche
  text.insert("text")
  .attr("class", "calendarWeek")
  .attr("x", 120)
  .attr("y", 10)
  .attr("dy", ".35em")
  .text("KW" + counterGesamt )
  .style("fill", "white");

  //Wochentage
  text.insert("text")
  .attr("x", function(d,i){return d.Tagnummer * paddingTag + 5 + 50})
  .attr("y", margin)
  .attr("dy", ".35em")
  .text(function(d) { return d.Tag })
  .style("fill", "white");

  text.insert("text")
  .attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
  .attr("y", topdown + margin)
  .attr("dy", ".35em")
  .text(function(d) { return "F" })
  .style("fill", "white");

  text.insert("text")
  .attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
  .attr("y", topdown + margin)
  .attr("dy", ".35em")
  .text(function(d) { return "M" })
  .style("fill", "white");

  text.insert("text")
  .attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
  .attr("y", topdown + margin)
  .attr("dy", ".35em")
  .text(function(d) { return "S" })
  .style("fill", "white");

  text.insert("text")
  .attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
  .attr("y", topdown + margin)
  .attr("dy", ".35em")
  .text(function(d) { return "G" })
  .style("fill", "white");


  passend.each(function(d,i) {

    for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      //.delay(5000)
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius)


    }
    for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius)

    }

    for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius)

    }
    for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
      .attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

  })


  mitarbeiterüberschuss.each(function(d,i) {

    for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);
    }


    for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

  })

  mitarbeitermangel.each(function(d,i) {
    for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Frühschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .attr("class",d.Mittelschicht_Status)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }

    for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
    for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
      d3.select(this).insert("circle")
      .attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
      .attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
      .attr("r",0)
      .transition()
      .attr("r",radius+1)
      .delay(cDelay * i)
      .duration(450)
      .transition()
      .duration(750)
      .attr("r",radius);

    }
  })
})

//drawLineDiagram();
//an dieser stelle klammer für onClick funktion einbauen um button zu aktivieren!
});



//Woche zwei
var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);


d3.csv("data/template/csv/week2.csv", function(error, data){

  function drawIndividualDonut (){




      //console.log(passend+"+"+unpassend+"+"+gesamt);

      //console.log(prozent);
      //
      /*data.forEach(function(d) {
        index++;
      });
      */


  //console.log(endPercent);


  var arc = d3.svg.arc()

  .startAngle(0)

  .innerRadius(circleradius)
  .outerRadius(circleradius - border);

  var parent = two.selectAll("parent")
  .data(data)
  .enter().append("svg");

  var svg = two.append('svg')
  .attr('width', boxSize)
  .attr('height', circleHeight)
  .attr("x", xPosDonut)
  .attr("y", marginDonut);

  var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');

  var meter = g.append('g')
  .attr('class', 'progress-meter');

  meter.append('path')
  .attr('class', 'background')
  .attr('fill', backgroundColor)
  .attr('fill-opacity', 1)
  .attr('d', arc.endAngle(twoPi));

  function drawBackground(){
  meter.selectAll("path").remove();
  meter.selectAll("text").remove();

  meter.append('path')
  .attr('class', 'background')
  .attr('fill', backgroundColor)
  .attr('fill-opacity', 1)
  .attr('d', arc.endAngle(twoPi));

  };

  var passend = 0;

  data.forEach(function(d) {
        if(d.Frühschicht_Status == "passend"){
        passend++;
      };
  });

  function drawIndividualValue (){



    var gesamt = 7;

    var prozent = (passend*100)/gesamt;
    endPercent = (prozent/100);

    console.log(passend);

    var count = Math.abs((endPercent - startPercent) / 0.01);
    var countTwo = Math.abs((full - startPercent) / 0.01);

    var step = endPercent < startPercent ? -0.01 : 0.01;
    var stepTwo = full < startPercent ? -0.01 : 0.01;

    meter.selectAll("path").remove();
    meter.selectAll("text").remove();

    meter.append('path')
    .attr('class', 'background')
    .attr('fill', backgroundColor)
    .attr('fill-opacity', 1)
    .attr('d', arc.endAngle(twoPi));


    //Donut Beschriftung
    meter.append("text")
    .attr("x", 110)
    .attr("y", -45 - marginDonutBeschriftung)
    .attr("dy", "0em")
    .text("Ihr Wunscherfüllungs-")
    .style("fill", "white");

    //Donut Beschriftung
    meter.append("text")
    .attr("x", 110)
    .attr("y", -45 - marginDonutBeschriftung)
    .attr("dy", "1.4em")
    .text("grad in %")
    .style("fill", "white");

  //meter.selectAll("path").remove();

  var middle = meter.append('path')
  .attr('class', 'middle')
  .attr('fill', red)
  .attr('fill-opacity', 1);

  var foreground = meter.append('path')
  .attr('class', 'foreground')
  .attr('fill', green)
  .attr('fill-opacity', 1);

  var numberText = meter.append('text')
  .attr('fill', white)
  .attr("text-anchor", "middle")
  .attr('dx', '115')
  .attr('dy', '.35em');



    var progress = 0;
    var progressTwo = 0;

    progress = startPercent;
    progressTwo = startPercent;

    function updateProgress(progress) {
      // middle.attr('d', arc.endAngle(twoPi * progressTwo));
      foreground.attr('d', arc.endAngle(twoPi * progress));
      numberText.text(formatPercent(progress));
    }

    function updateProgressTwo(progressTwo) {
      middle.attr('d', arc.endAngle(twoPi * progressTwo));
      // foreground.attr('d', arc.endAngle(twoPi * progress));
      //numberText.text(formatPercent(progress));
    }



    (
      function loops() {
        updateProgress(progress);
        updateProgressTwo(progressTwo);

        if (countTwo > 0) {
          countTwo--;
          // progress += step;
          progressTwo += stepTwo;
          setTimeout(loops, 10);
        }

        if (count > 0) {
          count--;
          progress += step;
          // progressTwo += stepTwo;
          // setTimeout(loops, 10);
        }
      })
      ();

      //  drawIndividualDonut();

    };

    $( ".individual" ).click(function() {
      if(swapped ==true){
      drawIndividualValue();
    }else {
      drawBackground();
    };
      //drawIndividualDonut();

      $("h1").text("Individuelle Übersicht");
    });

  //};
  };

  function drawDonut (){

    var passend =
    (d3.sum(data, function(d){return d.Frühschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Mittelschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Spätschicht_gedeckt;})
    +
    d3.sum(data, function(d){return d.Geteilt_gedeckt;})
  );

  var unpassend =
  (d3.sum(data, function(d){return d.Frühschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Frühschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Mittelschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Mittelschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Spätschicht_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Spätschicht_Mitarbeiterüberschuss; })
  +
  d3.sum(data, function(d){return d.Geteilt_Mitarbeitermangel; })
  +
  d3.sum(data, function(d){return d.Geteilt_Mitarbeiterüberschuss; })
);

var gesamt = passend + unpassend;

var prozent = (passend*100)/gesamt;

//console.log(passend+"+"+unpassend+"+"+gesamt);

//console.log(prozent);

percentArray.push(Math.round(prozent));

//console.log(percentArray);

var endPercent = (prozent/100);
//console.log(endPercent);
var count = Math.abs((endPercent - startPercent) / 0.01);
var countTwo = Math.abs((full - startPercent) / 0.01);

var step = endPercent < startPercent ? -0.01 : 0.01;
var stepTwo = full < startPercent ? -0.01 : 0.01;
var arc = d3.svg.arc()
.startAngle(0)
.innerRadius(circleradius)
.outerRadius(circleradius - border);

var parent = two.selectAll("parent")
.data(data)
.enter().append("svg");

var svg = two.append('svg')
.attr('width', boxSize)
.attr('height', circleHeight)
.attr("x", xPosDonut);

var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');

var meter = g.append('g')
.attr('class', 'progress-meter');

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45 - marginDonutBeschriftung)
.attr("dy", "0em")
.text("Wunscherfüllungsgrad")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45 - marginDonutBeschriftung)
.attr("dy", "1.4em")
.text("aller Fahrer in %")
.style("fill", "white");

meter.append('path')
.attr('class', 'background')
.attr('fill', backgroundColor)
.attr('fill-opacity', 1)
.attr('d', arc.endAngle(twoPi));

var middle = meter.append('path')
.attr('class', 'middle')
.attr('fill', steelFalse)
.attr('fill-opacity', 1);

var foreground = meter.append('path')
.attr('class', 'foreground')
.attr('fill', steel)
.attr('fill-opacity', 1);

var numberText = meter.append('text')
.attr('fill', white)
.attr("text-anchor", "middle")
.attr('dx', '115')
.attr('dy', '.35em');

function updateProgress(progress) {
  // middle.attr('d', arc.endAngle(twoPi * progressTwo));
  foreground.attr('d', arc.endAngle(twoPi * progress));
  numberText.text(formatPercent(progress));
}

function updateProgressTwo(progressTwo) {
  middle.attr('d', arc.endAngle(twoPi * progressTwo));
  // foreground.attr('d', arc.endAngle(twoPi * progress));
  //numberText.text(formatPercent(progress));
}

var progress = startPercent;
var progressTwo = startPercent;

(
  function loops() {
    updateProgress(progress);
    updateProgressTwo(progressTwo);

    if (countTwo > 0) {
      countTwo--;
      // progress += step;
      progressTwo += stepTwo;
      setTimeout(loops, 10);
    }

    if (count > 0) {
      count--;
      progress += step;
      // progressTwo += stepTwo;
      // setTimeout(loops, 10);
    }
  })
  ();
};

drawDonut();

drawIndividualDonut();

var passend = two.selectAll("passend")
.data(data)
.enter().append("svg")
.attr("class", "cmatch");

var mitarbeiterüberschuss = two.selectAll("überschuss")
.data(data)
.enter().append("svg")
.attr("class", "csurplus");

var mitarbeitermangel = two.selectAll("mangel")
.data(data)
.enter().append("svg")
.attr("class", "cdeficit");


var text = two.select("svg")
.selectAll("text")
.data(data).enter();

//Kalenderwoche
text.insert("text")
.attr("class", "calendarWeek")
.attr("x", 120)
.attr("y", 10)
.attr("dy", ".35em")
.text("KW" + counter )
.style("fill", "white");


//Wochentage
text.insert("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5 + 50})
.attr("y", margin)
.attr("dy", ".35em")
.text(function(d) { return d.Tag })
.style("fill", "white");



text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "F" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "M" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "S" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "G" })
.style("fill", "white");


passend.each(function(a,i) {

  for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

})


mitarbeiterüberschuss.each(function(a,i) {

  for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);
  }


  for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

})

mitarbeitermangel.each(function(a,i) {
  for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
})
})


//Woche drei
var three = d3.select(".three").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("data/template/csv/week1.csv", function(error, data){


    function drawIndividualDonut (){




        //console.log(passend+"+"+unpassend+"+"+gesamt);

        //console.log(prozent);
        //
        /*data.forEach(function(d) {
          index++;
        });
        */


    //console.log(endPercent);


    var arc = d3.svg.arc()

    .startAngle(0)

    .innerRadius(circleradius)
    .outerRadius(circleradius - border);

    var parent = three.selectAll("parent")
    .data(data)
    .enter().append("svg");

    var svg = three.append('svg')
    .attr('width', boxSize)
    .attr('height', circleHeight)
    .attr("x", xPosDonut)
    .attr("y", marginDonut);

    var g = svg.append('g')
    .attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');

    var meter = g.append('g')
    .attr('class', 'progress-meter');

    meter.append('path')
    .attr('class', 'background')
    .attr('fill', backgroundColor)
    .attr('fill-opacity', 1)
    .attr('d', arc.endAngle(twoPi));

    function drawBackground(){
    meter.selectAll("path").remove();
    meter.selectAll("text").remove();

    meter.append('path')
    .attr('class', 'background')
    .attr('fill', backgroundColor)
    .attr('fill-opacity', 1)
    .attr('d', arc.endAngle(twoPi));

    };

    var passend = 0;

    data.forEach(function(d) {
          if(d.Frühschicht_Status == "passend"){
          passend++;
        };
    });

    function drawIndividualValue (){



      var gesamt = 7;

      var prozent = (passend*100)/gesamt;
      endPercent = (prozent/100);

      console.log(passend);

      var count = Math.abs((endPercent - startPercent) / 0.01);
      var countTwo = Math.abs((full - startPercent) / 0.01);

      var step = endPercent < startPercent ? -0.01 : 0.01;
      var stepTwo = full < startPercent ? -0.01 : 0.01;

      meter.selectAll("path").remove();
      meter.selectAll("text").remove();

      meter.append('path')
      .attr('class', 'background')
      .attr('fill', backgroundColor)
      .attr('fill-opacity', 1)
      .attr('d', arc.endAngle(twoPi));


      //Donut Beschriftung
      meter.append("text")
      .attr("x", 110)
      .attr("y", -45 - marginDonutBeschriftung)
      .attr("dy", "0em")
      .text("Ihr Wunscherfüllungs-")
      .style("fill", "white");

      //Donut Beschriftung
      meter.append("text")
      .attr("x", 110)
      .attr("y", -45 - marginDonutBeschriftung)
      .attr("dy", "1.4em")
      .text("grad in %")
      .style("fill", "white");

    //meter.selectAll("path").remove();

    var middle = meter.append('path')
    .attr('class', 'middle')
    .attr('fill', red)
    .attr('fill-opacity', 1);

    var foreground = meter.append('path')
    .attr('class', 'foreground')
    .attr('fill', green)
    .attr('fill-opacity', 1);

    var numberText = meter.append('text')
    .attr('fill', white)
    .attr("text-anchor", "middle")
    .attr('dx', '115')
    .attr('dy', '.35em');



      var progress = 0;
      var progressTwo = 0;

      progress = startPercent;
      progressTwo = startPercent;

      function updateProgress(progress) {
        // middle.attr('d', arc.endAngle(twoPi * progressTwo));
        foreground.attr('d', arc.endAngle(twoPi * progress));
        numberText.text(formatPercent(progress));
      }

      function updateProgressTwo(progressTwo) {
        middle.attr('d', arc.endAngle(twoPi * progressTwo));
        // foreground.attr('d', arc.endAngle(twoPi * progress));
        //numberText.text(formatPercent(progress));
      }



      (
        function loops() {
          updateProgress(progress);
          updateProgressTwo(progressTwo);

          if (countTwo > 0) {
            countTwo--;
            // progress += step;
            progressTwo += stepTwo;
            setTimeout(loops, 10);
          }

          if (count > 0) {
            count--;
            progress += step;
            // progressTwo += stepTwo;
            // setTimeout(loops, 10);
          }
        })
        ();

        //  drawIndividualDonut();

      };

      $( ".individual" ).click(function() {
        if(swapped ==true){
        drawIndividualValue();
      }else {
        drawBackground();
      };
        //drawIndividualDonut();

        $("h1").text("Individuelle Übersicht");
      });

    //};
    };

function drawDonut (){

  var passend =
  (d3.sum(data, function(d){return d.Frühschicht_gedeckt;})
  +
  d3.sum(data, function(d){return d.Mittelschicht_gedeckt;})
  +
  d3.sum(data, function(d){return d.Spätschicht_gedeckt;})
  +
  d3.sum(data, function(d){return d.Geteilt_gedeckt;})
);

var unpassend =
(d3.sum(data, function(d){return d.Frühschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Frühschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Mittelschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Mittelschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Spätschicht_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Spätschicht_Mitarbeiterüberschuss; })
+
d3.sum(data, function(d){return d.Geteilt_Mitarbeitermangel; })
+
d3.sum(data, function(d){return d.Geteilt_Mitarbeiterüberschuss; })
);


var gesamt = passend + unpassend;

var prozent = (passend*100)/gesamt;

//console.log(passend+"+"+unpassend+"+"+gesamt);

//console.log(prozent);

var endPercent = (prozent/100);
//console.log(endPercent);

percentArray.push(Math.round(prozent));

//console.log(percentArray);


var count = Math.abs((endPercent - startPercent) / 0.01);
var countTwo = Math.abs((full - startPercent) / 0.01);

var step = endPercent < startPercent ? -0.01 : 0.01;
var stepTwo = full < startPercent ? -0.01 : 0.01;
var arc = d3.svg.arc()
.startAngle(0)
.innerRadius(circleradius)
.outerRadius(circleradius - border);

var parent = three.selectAll("parent")
.data(data)
.enter().append("svg");

var svg = three.append('svg')
.attr('width', boxSize)
.attr('height', circleHeight)
.attr("x", xPosDonut);

var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + (boxSize / 2 + marginDonutBeschriftung) + ')');

var meter = g.append('g')
.attr('class', 'progress-meter');

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45- marginDonutBeschriftung)
.attr("dy", "0em")
.text("Wunscherfüllungsgrad")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45 - marginDonutBeschriftung)
.attr("dy", "1.4em")
.text("aller Fahrer in %")
.style("fill", "white");

meter.append('path')
.attr('class', 'background')
.attr('fill', backgroundColor)
.attr('fill-opacity', 1)
.attr('d', arc.endAngle(twoPi));

var middle = meter.append('path')
.attr('class', 'middle')
.attr('fill', steelFalse)
.attr('fill-opacity', 1);

var foreground = meter.append('path')
.attr('class', 'foreground')
.attr('fill', steel)
.attr('fill-opacity', 1);

var numberText = meter.append('text')
.attr('fill', white)
.attr("text-anchor", "middle")
.attr('dx', '115')
.attr('dy', '.35em');

function updateProgress(progress) {
  // middle.attr('d', arc.endAngle(twoPi * progressTwo));
  foreground.attr('d', arc.endAngle(twoPi * progress));
  numberText.text(formatPercent(progress));
}

function updateProgressTwo(progressTwo) {
  middle.attr('d', arc.endAngle(twoPi * progressTwo));
  // foreground.attr('d', arc.endAngle(twoPi * progress));
  //numberText.text(formatPercent(progress));
}

var progress = startPercent;
var progressTwo = startPercent;

(
  function loops() {
    updateProgress(progress);
    updateProgressTwo(progressTwo);

    if (countTwo > 0) {
      countTwo--;
      // progress += step;
      progressTwo += stepTwo;
      setTimeout(loops, 10);
    }

    if (count > 0) {
      count--;
      progress += step;
      // progressTwo += stepTwo;
      // setTimeout(loops, 10);
    }
  })
  ();
};

drawDonut();

drawIndividualDonut();




var passend = three.selectAll("passend")
.data(data)
.enter().append("svg")
.attr("class", "cmatch");

var mitarbeiterüberschuss = three.selectAll("überschuss")
.data(data)
.enter().append("svg")
.attr("class", "csurplus");

var mitarbeitermangel = three.selectAll("mangel")
.data(data)
.enter().append("svg")
.attr("class", "cdeficit");


var text = three.select("svg")
.selectAll("text")
.data(data).enter();

//Kalenderwoche
text.insert("text")
.attr("class", "calendarWeek")
.attr("x", 120)
.attr("y", 10)
.attr("dy", ".35em")
.text("KW" + counter )
.style("fill", "white");

//Wochentage
text.insert("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5 + 50})
.attr("y", margin)
.attr("dy", ".35em")
.text(function(d) { return d.Tag })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "F" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "M" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "S" })
.style("fill", "white");

text.append("text")
.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
.attr("y", topdown + margin)
.attr("dy", ".35em")
.text(function(d) { return "G" })
.style("fill", "white");


passend.each(function(a,i) {

  for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

})


mitarbeiterüberschuss.each(function(a,i) {

  for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);
  }


  for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

})

mitarbeitermangel.each(function(a,i) {
  for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Frühschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .attr("class",a.Mittelschicht_Status)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }

  for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
  for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
    d3.select(this).append("circle")
    .attr("cx", function(a,i){return a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
    .attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + margin})
    .attr("r",0)
    .transition()
    .attr("r",radius+1)
    .delay(cDelay * i)
    .duration(450)
    .transition()
    .duration(750)
    .attr("r",radius);

  }
})
})
