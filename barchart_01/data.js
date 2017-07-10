
var width = 1900;
var height = 500;


var chart = d3.select(".chart").append("svg")
.attr("width", width)
.attr("height",height);


d3.csv("week1.csv", function(error, data){

	var passend = chart.selectAll("passend")
	.data(data)
	.enter().append("svg")
	.attr("class", "cmatch");

	var mitarbeiterüberschuss = chart.selectAll("überschuss")
	.data(data)
	.enter().append("svg")
	.attr("class", "csurplus");

	var mitarbeitermangel = chart.selectAll("mangel")
	.data(data)
	.enter().append("svg")
	.attr("class", "cdeficit");

	passend.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 15 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
	})
})



var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("week2.csv", function(error, data){

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

	passend.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

	})	

	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
	})
})



var three = d3.select(".three").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("week3.csv", function(error, data){

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

	passend.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

	})	

	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 50})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 90})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180+ 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 180 + 20 + 130})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
	})
})