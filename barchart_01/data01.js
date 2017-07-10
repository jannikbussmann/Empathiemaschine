
var width = 2000;
var height = 1000;

var x = d3.scale.linear()
    .range([0, width]);

var chart = d3.select(".chart").append("svg")
	.attr("width", width)
	.attr("height",height);


d3.csv("data.csv", function(error, data){
x.domain([0, d3.max(data, function(d) { return d.Frühschicht; })]); 

/*var circleBar = chart.selectAll("circle")
	.data(data)
	.enter().append("circle")

data.forEach(function(d, i) {

circleBar.append("circle")
	.attr("cx",20)
	.attr("cy",20)
	.style("fill","black")

/* console.log(d + " " + i);

});*/
var stroke=("#FCFAF2");
var fill = ("rgba(255, 0, 0,255)");
var fillTwo = ("#B0D0D3");
var noFIll=("rgba(0,0,0,0)")

var passend = chart.selectAll("svg")
		.data(data)
	.enter().append("svg")

var mitarbeiterüberschuss = chart.selectAll("svg")
		.data(data)
	.enter().append("svg")


passend.each(function(d,i) {
//var half = d.Frühschicht_gedeckt/2;

	for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("stroke",stroke);
	}
	for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110 + 20})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("stroke",stroke);
	}

	for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110})
		.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
		.attr("r","5")
		.attr("fill",fill);
	}
	for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110 + 20})
		.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
		.attr("r","5")
		.attr("fill",fill);
	}

	for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110})
		.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
		.attr("r","5")
		.attr("fill",fillTwo);
	}
	for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110 + 20})
		.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
		.attr("r","5")
		.attr("fill",fillTwo);
	}
})
})

/*
	for (var x = 1; x <= d.FrühMitarbeiter; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("fill",fill);
	}
	for (var x = 1; x <= d.Mittelschicht; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 20})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("stroke",stroke)
		.style("fill",noFIll);
	}
	for (var x = 1; x <= d.MittelMitarbeiter; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 20})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("fill",fill);
	}
	for (var x = 1; x <= d.Spätschicht; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 40})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("stroke",stroke)
		.style("fill", noFIll);
	}
	for (var x = 1; x <= d.SpätMitarbeiter; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 40})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("fill",fill);
	}
	for (var x = 1; x <= d.Geteilteschicht; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 60})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("stroke",stroke)
		.style("fill", noFIll);

	}
	for (var x = 1; x <= d.GeteilteMitarbeiter; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(d,i){return d.Tagnummer * 110+ 60})
		.attr("cy", function(d,i){return (x + 1)*15})
		.attr("r","5")
		.attr("fill",fill);
	}
*/

/*
bar.append("text")
	.attr("x",  function(d,i){return d.Tagnummer * 110})
	.attr("y", 12)
	.attr("dy", ".35em")
	.text("F")
	.style("fill", stroke);

bar.append("text")
	.attr("x",  function(d,i){return d.Tagnummer * 110+ 20})
	.attr("y", 12)
	.attr("dy", ".35em")
	.text("M")
	.style("fill", stroke);

bar.append("text")
	.attr("x",  function(d,i){return d.Tagnummer * 110+ 40})
	.attr("y", 12)
	.attr("dy", ".35em")
	.text("S")
	.style("fill", stroke);

bar.append("text")
	.attr("x",  function(d,i){return d.Tagnummer * 110+ 60})
	.attr("y", 12)
	.attr("dy", ".35em")
	.text("G")
	.style("fill", stroke);

bar.append("rect")
	.attr("width", 20)
	.attr("height", function(d){return d.Frühschicht*10})
	.attr("x", function(d,i){return d.Tagnummer * 120})
	.attr("y", 100)
	.style("fill", "#2B303A");

bar.append("text")
	.attr("x", function(d,i){return d.Tagnummer * 120+ 10})
	.attr("y", 90)
	.attr("dy", ".35em")
	.text(function(d) { return d.Frühschicht })
	.style("fill", "#2B303A");

bar.append("rect")
	.attr("width", 20)
	.attr("height", function(d){return d.Mittelschicht*10})
	.attr("x", function(d,i){return d.Tagnummer * 120+ 25})
	.attr("y", 100)
	.style("fill", "#92DCE5");

bar.append("text")
	.attr("x", function(d,i){return d.Tagnummer * 120+ 35})
	.attr("y", 90)
	.attr("dy", ".35em")
	.text(function(d) { return d.Mittelschicht })
	.style("fill", "#92DCE5");

bar.append("rect")
	.attr("width", 20)
	.attr("height", function(d){return d.Spätschicht*10})
	.attr("x", function(d,i){return d.Tagnummer * 120+ 50})
	.attr("y", 100)
	.style("fill", "#D64933");

bar.append("text")
	.attr("x", function(d,i){return d.Tagnummer * 120+ 60})
	.attr("y", 90)
	.attr("dy", ".35em")
	.text(function(d) { return d.Spätschicht })
	.style("fill", "#D64933");

bar.append("rect")
	.attr("width", 20)
	.attr("height", function(d){return d.Geteilteschicht*10})
	.attr("x", function(d,i){return d.Tagnummer * 120+ 75})
	.attr("y", 100)
	.style("fill", "#7C7C7C");

bar.append("text")
	.attr("x", function(d,i){return d.Tagnummer * 120+ 85})
	.attr("y", 90)
	.attr("dy", ".35em")
	.text(function(d) { return d.Geteilteschicht })
	.style("fill", "#7C7C7C");

/*bar.append("text")
	.attr("x", function(d,i){return d.Tagnummer * 30+10})
	.attr("y", 80)
	.attr("dy", ".35em")
	.text(function(d) { return d.Tagnummer })
	.style("fill", "black");*/




/*
var width = 420,
    barHeight = 20;

var x = d3.scale.linear()
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width);

d3.csv("data.csv", type, function(error, data) {
  x.domain([0, d3.max(data, function(d) { return d.Tagnummer; })]);

  chart.attr("height", barHeight * data.length);

  var bar = chart.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  bar.append("rect")
      .attr("width", function(d) { return x(d.Tagnummer); })
      .attr("height", barHeight - 1);

  bar.append("text")
      .attr("x", function(d) { return x(d.Tagnummer) - 3; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.Tagnummer; });
});

function type(d) {
  d.Tagnummer = +d.Tagnummer; // coerce to number
  return d;
}





d3.csv("data.csv", function(data){ 


	var width = 1000;
	var height = 2000;

	var canvas = d3.select("body").append("svg")
		.attr("width", width)
		.attr("height", height)



	var bars = canvas.selectAll("rect").data(data).enter()


		bars.append("rect")
		.attr("width", 20)
		.attr("height", function(d) { return d.Frühschicht * 10; })
		.attr("y", 100)
		.attr("x",function(d,i) {return i*30;})
		.attr("fill", "#92F8BC")

		bars.append("rect")
		.attr("width", 20)
		.attr("height",function(d) { return d.FrühMitarbeiter *10; })
		.attr("y",  100 )
		.attr("x",function(d,i) {return i*30;})
		.attr("fill", "#ED8A7E")

})
/*
*/


