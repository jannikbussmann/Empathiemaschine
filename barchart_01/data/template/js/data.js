var width = 1900;
var height = 400;

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

var counter = 1;
var counterTwo = 1;
var counterThree = 2;

//unwichtig, wird hier nur zusammengerechnt
var paddingMitte = paddingSchichtart;
var paddingSpät = paddingSchichtart + paddingSchichtart;
var paddingGeteilt = paddingSchichtart + paddingSchichtart + paddingSchichtart;

function onClick()
{
 	//window.location.reload();
 	counter += 1;
 	counterTwo += 1;
 	counterThree += 1;

 	if (counter > 3) {
 		counter = 1
 	}
 	if (counterTwo > 3) {
 		counterTwo = 1
 	}
 	if (counterThree > 3) {
 		counterThree = 1
 	}

 	console.log(counter+" "+ counterTwo+" "+ counterThree);





	//Woche eins
	var chart = d3.select(".one").insert("svg","svg")
	.attr("width", width)
	.attr("height",height);


	d3.csv("data/template/csv/week"+counter+".csv", function(error, data){


	/*
	var texts = chart.selectAll("texts")
		.data(data)
		.enter().append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "F" })
		.style("fill", "white");*/

	/*
	var texts2 = chart.selectAll("texts2")
		.data(data)
		.enter().append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "M" })
		.style("fill", "white");

	var texts3 = chart.selectAll("texts3")
		.data(data)
		.enter().append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "S" })
		.style("fill", "white");

	var texts4 = chart.selectAll("texts4")
		.data(data)
		.enter().append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "G" })
		.style("fill", "white");*/


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


	text.insert("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "F" })
		.style("fill", "white");

	text.insert("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "M" })
		.style("fill", "white");

	text.insert("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "S" })
		.style("fill", "white");

	text.insert("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "G" })
		.style("fill", "white");


		passend.each(function(d,i) {

			for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
				d3.select(this).insert("circle")
				.attr("cx", function(d,i){return d.Tagnummer * paddingTag})
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
				.attr("r",0)
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
				.attr("r",0)
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
				.attr("r",0)
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
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
				.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
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
				.attr("cy", function(d,i){return topdown-(x + 1)*kreisZuKreis})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
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
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
			.attr("r",0)
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis))})
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
			.attr("cx", function(d,i){return d.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
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
			.attr("cy", function(d,i){return topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test))})
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

}

//Woche zwei
var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);

d3.csv("data/template/csv/week2.csv", function(error, data){

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


	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "F" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "M" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "S" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "G" })
		.style("fill", "white");


	passend.each(function(a,i) {

		for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(a,i){return a.Tagnummer * paddingTag})
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
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
			.attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
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
			.attr("cy", function(a,i){return topdown-(x + 1)*kreisZuKreis})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
		.attr("r",0)
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
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
		.attr("cx", function(a,i){return a.Tagnummer * paddingTag+ paddingSpät})
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cx", function(a,i){return a.Tagnummer * paddingTag+paddingMitte})
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test))})
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
		.attr("cy", function(a,i){return topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test))})
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


	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 5})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "F" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 35})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "M" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 65})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "S" })
		.style("fill", "white");

	text.append("text")
		.attr("x", function(d,i){return d.Tagnummer * paddingTag + 95})
		.attr("y", topdown)
		.attr("dy", ".35em")
		.text(function(d) { return "G" })
		.style("fill", "white");

	passend.each(function(b,i) {

		for (var x = 1; x <= b.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}
		for (var x = 1; x <= b.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}

		for (var x = 1; x <= b.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingMitte})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}
		for (var x = 1; x <= b.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}

		for (var x = 1; x <= b.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag+ paddingSpät})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}
		for (var x = 1; x <= b.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}

		for (var x = 1; x <= b.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingGeteilt})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
			.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

		}
		for (var x = 1; x <= b.Geteilt_gedeckt/2; x++) {
			d3.select(this).append("circle")
			.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
			.attr("cy", function(b,i){return topdown-(x + 1)*kreisZuKreis})
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


	mitarbeiterüberschuss.each(function(b,i) {

	for (var x = 1; x <= b.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);
	}


	for (var x = 1; x <= b.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingMitte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis-test))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}

	for (var x = 1; x <= b.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+ paddingSpät})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}

	for (var x = 1; x <= b.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingGeteilt})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Geteilt_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Geteilt_gedeckt/2*kreisZuKreis))})
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

	mitarbeitermangel.each(function(b,i) {
	for (var x = 1; x <= b.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}

	for (var x = 1; x <= b.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingMitte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}

	for (var x = 1; x <= b.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+ paddingSpät})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+((b.Spätschicht_gedeckt/2)*kreisZuKreis))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}

	for (var x = 1; x <= b.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag+paddingGeteilt})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+((b.Geteilt_gedeckt/2)*kreisZuKreis-test))})
		.attr("r",0)
				.transition()
				.attr("r",radius+1)
				.delay(cDelay * i)
				.duration(450)
				.transition()
				.duration(750)
				.attr("r",radius);

	}
	for (var x = 1; x <= b.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append("circle")
		.attr("cx", function(b,i){return b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt})
		.attr("cy", function(b,i){return topdown-((x + 1)*kreisZuKreis+((b.Geteilt_gedeckt/2)*kreisZuKreis-test))})
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
