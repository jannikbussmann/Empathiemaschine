
var width = 1900;
var height = 500;

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

//unwichtig, wird hier nur zusammengerechnt
var paddingMitte = paddingSchichtart;
var paddingSpät = paddingSchichtart + paddingSchichtart;
var paddingGeteilt = paddingSchichtart + paddingSchichtart + paddingSchichtart;


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
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

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
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

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
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",radius)

		}

	})


	mitarbeiterüberschuss.each(function(d,i) {

		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)
		}


		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

	})

	mitarbeitermangel.each(function(d,i) {
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",radius)

		}

		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
		for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
			.attr("r",radius)

		}
	})
})