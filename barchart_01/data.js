
var width = 1800;
var height = 500;

//Tage untereinander, muss translate angepasst werden (Bsp. Tag1 und Tag2)
var paddingTag = 130;

var kreisZuKreis = 12;
//Abstand zum zweiten Teil der jweiligen Schichtart (Bsp. 1. Teil früh zu 2. Teil früh)
var zweiteHälfte = 12;

// Abstand von einer Schichtart zu anderen (Bsp.: Früh zu Mitte)
var paddingSchichtart = 30;

// Radius der Kreise
var radius = 4;

//unwichtig, wird hier nur zusammengerechnt
var paddingMitte = paddingSchichtart;
var paddingSpät = paddingSchichtart + paddingSchichtart;
var paddingGeteilt = paddingSchichtart + paddingSchichtart + paddingSchichtart;


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
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

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
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})	

	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
	})
})


var three = d3.select(".three").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("weekthree.csv", function(error, data){

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
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})	

	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Frühschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 40})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Mittelschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 80})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Spätschicht_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200+ 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
<<<<<<< Updated upstream
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingGeteilt})
<<<<<<< Updated upstream
			.attr("cy", function(d,i){return (x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)})
=======
=======
			.attr("cx", function(d,i){return d.Tagnummer * 200 + 20 + 120})
>>>>>>> Stashed changes
			.attr("cy", function(d,i){return (x + 1)*15+(d.Geteilt_gedeckt/2*15)})
>>>>>>> Stashed changes
			.attr("r",radius)

		}
	})
})