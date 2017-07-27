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
var radius = 10;


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

 	console.log(counter+' '+ counterTwo+' '+ counterThree);





	//Woche eins
	var chart = d3.select('.one').insert('div','div')
	.attr('width', width)
	.attr('height',height);


	d3.csv('data/template/csv/week'+counter+'.csv', function(error, data){


	/*
	var texts = chart.selectAll('texts')
		.data(data)
		.enter().append('text')
		.attr('x', function(d,i){return d.Tagnummer * paddingTag + 5})
		.attr('y', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'F' })
		.style('fill', 'white');*/

	/*
	var texts2 = chart.selectAll('texts2')
		.data(data)
		.enter().append('text')
		.attr('x', function(d,i){return d.Tagnummer * paddingTag + 35})
		.attr('y', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'M' })
		.style('fill', 'white');

	var texts3 = chart.selectAll('texts3')
		.data(data)
		.enter().append('text')
		.attr('x', function(d,i){return d.Tagnummer * paddingTag + 65})
		.attr('y', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'S' })
		.style('fill', 'white');

	var texts4 = chart.selectAll('texts4')
		.data(data)
		.enter().append('text')
		.attr('x', function(d,i){return d.Tagnummer * paddingTag + 95})
		.attr('y', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'G' })
		.style('fill', 'white');*/


		var passend = chart.selectAll('passend')
		.data(data)
		.enter().insert('div')
		.attr('class', 'cmatch');

		var mitarbeiterüberschuss = chart.selectAll('überschuss')
		.data(data)
		.enter().insert('div')
		.attr('class', 'csurplus');

		var mitarbeitermangel = chart.selectAll('mangel')
		.data(data)
		.enter().insert('div')
		.attr('class', 'cdeficit');

		var text = chart.select('div')
		.selectAll('text')
		.data(data).enter();


		text.insert('text')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + 5 + "px")
		.style('top', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'F' })
		.style('fill', 'white');

		text.insert('text')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + 35 + "px")
		.style('top', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'M' })
		.style('fill', 'white');

		text.insert('text')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + 65 + "px")
		.style('top', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'S' })
		.style('fill', 'white');

		text.insert('text')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + "px")
		.style('top', topdown)
		.attr('dy', '.35em')
		.text(function(d) { return 'G' })
		.style('fill', 'white');


		passend.each(function(d,i) {

			for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				//.delay(5000)
				.style('width',radius + "px")
				.style('height',radius + "px")
			}
			for (var x = 1; x <= d.Frühschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag + zweiteHälfte + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px")

			}

			for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag+paddingMitte + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px")

			}
			for (var x = 1; x <= d.Mittelschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px");

			}

			for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag+ paddingSpät + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px");

			}
			for (var x = 1; x <= d.Spätschicht_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px");

			}

			for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag+paddingGeteilt + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px");

			}
			for (var x = 1; x <= d.Geteilt_gedeckt/2; x++) {
				d3.select(this).insert('div')
				.attr('class', 'circle')
				.style('position','absolute')
				.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
				.style('top', topdown-(x + 1)*kreisZuKreis + "px")
				.style('width',radius + "px")
				.style('height',radius + "px");

			}

		})


mitarbeiterüberschuss.each(function(d,i) {

	for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");
	}


	for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

})

mitarbeitermangel.each(function(d,i) {
	for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= d.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).insert('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', d.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(d.Geteilt_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
})
})

}

//Woche zwei
var two = d3.select('.two').append('div')
.attr('width', width)
.attr('height',height);

d3.csv('data/template/csv/week2.csv', function(error, data){

	var passend = two.selectAll('passend')
	.data(data)
	.enter().append('div')
	.attr('class', 'cmatch');

	var mitarbeiterüberschuss = two.selectAll('überschuss')
	.data(data)
	.enter().append('div')
	.attr('class', 'csurplus');

	var mitarbeitermangel = two.selectAll('mangel')
	.data(data)
	.enter().append('div')
	.attr('class', 'cdeficit');


	var text = two.select('div')
	.selectAll('span')
	.data(data).enter();

	var schicht = function(d,i){
		return d.Tagnummer * paddingTag;
	}
console.log(schicht);


	text.append("span")
	.attr('class','days')
	.style('position','absolute')
	.style('left', d.Tagnummer * paddingTag + 5 + "px")
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'F' })
	.style('fill', 'white');

	text.append('span')
	.attr('class','days')
	.style('position','absolute')
	.style('left', d.Tagnummer * paddingTag + 35 + 'px')
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'M' })
	.style('fill', 'white');

	text.append('span')
	.attr('class','days')
	.style('position','absolute')
	.style('left', d.Tagnummer * paddingTag + 65 + 'px')
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'S' })
	.style('fill', 'white');

	text.append('span')
	.attr('class','days')
	.style('position','absolute')
	.style('left', d.Tagnummer * paddingTag + 95 + 'px')
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'G' })
	.style('fill', 'white');


	passend.each(function(a,i) {

		for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= a.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag + zweiteHälfte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag+paddingMitte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= a.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag+ paddingSpät + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= a.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag+paddingGeteilt + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= a.Geteilt_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

	})


mitarbeiterüberschuss.each(function(a,i) {

	for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + "px")
		.style('top',  topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px")
		console.log("Wert" + a.Tagnummer * paddingTag)

	}
	for (var x = 1; x <= a.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");
	}


	for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+paddingMitte)
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

})

mitarbeitermangel.each(function(a,i) {
	for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= a.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', a.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(a.Geteilt_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
})
})

//Woche drei
var three = d3.select('.three').append('div')
.attr('width', width)
.attr('height',height);

d3.csv('data/template/csv/week1.csv', function(error, data){


	var passend = three.selectAll('passend')
	.data(data)
	.enter().append('div')
	.attr('class', 'cmatch');

	var mitarbeiterüberschuss = three.selectAll('überschuss')
	.data(data)
	.enter().append('div')
	.attr('class', 'csurplus');

	var mitarbeitermangel = three.selectAll('mangel')
	.data(data)
	.enter().append('div')
	.attr('class', 'cdeficit');

	var text = three.select('div')
	.selectAll('text')
	.data(data).enter();


	text.append('text')
	.attr('x', function(d,i){return d.Tagnummer * paddingTag + 5})
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'F' })
	.style('fill', 'white');

	text.append('text')
	.attr('x', function(d,i){return d.Tagnummer * paddingTag + 35})
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'M' })
	.style('fill', 'white');

	text.append('text')
	.attr('x', function(d,i){return d.Tagnummer * paddingTag + 65})
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'S' })
	.style('fill', 'white');

	text.append('text')
	.attr('x', function(d,i){return d.Tagnummer * paddingTag + 95})
	.attr('y', topdown)
	.attr('dy', '.35em')
	.text(function(d) { return 'G' })
	.style('fill', 'white');

	passend.each(function(b,i) {

		for (var x = 1; x <= b.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= b.Frühschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag + zweiteHälfte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= b.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag+paddingMitte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= b.Mittelschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= b.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag+ paddingSpät + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= b.Spätschicht_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

		for (var x = 1; x <= b.Geteilt_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag+paddingGeteilt + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}
		for (var x = 1; x <= b.Geteilt_gedeckt/2; x++) {
			d3.select(this).append('div')
			.attr('class', 'circle')
			.style('position','absolute')
			.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
			.style('top', topdown-(x + 1)*kreisZuKreis + "px")
			.style('width',radius + "px")
			.style('height',radius + "px");

		}

	})


mitarbeiterüberschuss.each(function(b,i) {

	for (var x = 1; x <= b.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Frühschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");
	}


	for (var x = 1; x <= b.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Mittelschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= b.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Spätschicht_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= b.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Geteilt_Mitarbeiterüberschuss/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Geteilt_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

})

mitarbeitermangel.each(function(b,i) {
	for (var x = 1; x <= b.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Frühschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Frühschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= b.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Mittelschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingMitte + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Mittelschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= b.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+ paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+(b.Spätschicht_gedeckt/2*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Spätschicht_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte + paddingSpät + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+((b.Spätschicht_gedeckt/2)*kreisZuKreis)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}

	for (var x = 1; x <= b.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag+paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+((b.Geteilt_gedeckt/2)*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
	for (var x = 1; x <= b.Geteilt_Mitarbeitermangel/2; x++) {
		d3.select(this).append('div')
		.attr('class', 'circle')
		.style('position','absolute')
		.style('left', b.Tagnummer * paddingTag + zweiteHälfte +paddingGeteilt + "px")
		.style('top', topdown-((x + 1)*kreisZuKreis+((b.Geteilt_gedeckt/2)*kreisZuKreis-test)) + "px")
		.style('width',radius + "px")
		.style('height',radius + "px");

	}
})
})
