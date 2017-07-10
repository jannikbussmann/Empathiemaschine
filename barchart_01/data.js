
var width = 2000;
var height = 1000;


var chart = d3.select(".chart").append("svg")
.attr("width", width)
.attr("height",height);


d3.csv("weekOne.csv", function(error, data){

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
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
	})
})



var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("weekTwo.csv", function(error, data){

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
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15})
			.attr("r","5")

		}

	})	

	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
			.attr("r","5")

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
			.attr("r","5")

		}
	})
})
