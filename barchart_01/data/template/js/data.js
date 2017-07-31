var w = 1060,
h = 400,
padding = 25;

var dataset = [
	[1, 10],
	[2, 50],
	[3, 120],
	[4, 80],
	[5, 90],
	[6, 50],
	[7, 70],
	[8, 90],
	[9, 150],
	[10, 50],
	[11, 40],
	[12, 70],
	[13, 20],
	[14, 40],
	[15, 30],
	[16, 10],
	[17, 50],
	[18, 120],
	[19, 80],
	[20, 90],
	[21, 50],
	[22, 70],
	[23, 90],
	[24, 150],
	[25, 50],
	[26, 40],
	[27, 70],
	[28, 20],
	[29, 40],
	[30, 30],
	[31, 10],
	[32, 50],
	[33, 120],
	[34, 80],
	[35, 90],
	[36, 50],
	[37, 70],
	[38, 90],
	[39, 150],
	[40, 50],
	[41, 40],
	[42, 70],
	[43, 20],
	[44, 40],
	[45, 30],
	[46, 50],
	[47, 70],
	[48, 90],
	[49, 150],
	[50, 50],
	[51, 40],
	[52, 70]
];

/*create svg element*/
var svg = d3.select('.linechart')
.append('svg')
.attr('width', w)
.attr('height', h)
.attr('id', 'chart');

/*x scale*/
var xScale = d3.scale.linear()
.domain([0, d3.max(dataset, function(d) {
	return d[0];
})])
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
.orient('bottom');

/*append x axis*/
svg.append('g')
.attr({
	'class': 'xaxis',
	'transform': 'translate(0,' + (h - padding) + ')'
})
.call(xAxis);

/*y axis*/
var yAxis = d3.svg.axis()
.scale(yScale)
.orient('left');

/*append y axis*/
svg.append('g')
.attr({
	'class': 'yaxis',
	'transform': 'translate(' + padding + ',0)'
})
.call(yAxis);

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
	return yScale(d[1])})
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
		'r': 7,
		'class': 'datapoint',
		'id': function(d, i) {
			return i;
		}
	})

	.style('opacity', 1);

	var mouseG = svg.append("g")
	.attr("class", "mouse-over-effects");

	mouseG.append("path") // this is the black vertical line to follow mouse
	.attr("class", "mouse-line")
	.style("stroke", "white")
	.style("stroke-width", "1px")
	.style("opacity", "0");

	var lines = document.getElementsByClassName('lineChart');

	var mousePerLine = mouseG.selectAll('.mouse-per-line')
	.data(dataset)
	.enter()
	.append("g")
	.attr("class", "mouse-per-line");

	mousePerLine.append("circle")
	.attr("r", 7)
	.style("stroke", '#A0B1AB')
	.style("fill", "none")
	.style("stroke-width", "1px")
	.style("opacity", "0");

	mousePerLine.append("text")
	.attr("transform", "translate(10,3)");

	mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
	.attr('width', width) // can't catch mouse events on a g element
	.attr('height', height)
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
			console.log(width/mouse[0])
			var xDate = x.invert(mouse[0]),
			bisect = d3.bisector(function(d) { return d.date; }).right;
			idx = bisect(d.values, xDate);

			var beginning = 0,
			end = lines[i].getTotalLength(),
			target = null;

			while (true){
				target = Math.floor((beginning + end) / 2);
				pos = lines[i].getPointAtLength(target);
				if ((target === end || target === beginning) && pos.x !== mouse[0]) {
					break;
				}
				if (pos.x > mouse[0])      end = target;
				else if (pos.x < mouse[0]) beginning = target;
				else break; //position found
			}

			d3.select(this).select('text')
			.text(y.invert(pos.y).toFixed(2));

			return "translate(" + mouse[0] + "," + pos.y +")";
		});
	});


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
	var border = 25;
	var padding = 30;
	var startPercent = 0;
	var full = 1;

	var twoPi = Math.PI * 2;
	var formatPercent = d3.format('.0%');
	var boxSize = (circleradius + padding) * 2;
	var circleHeight = 200;


	var xPosDonut = 900;
	var marginDonut = 180;

	/*
	--------------------------------
	------- WOCHENÜBERSICHT --------
	--------------------------------

	Balkendiagramme zum vergleich von
	Schichtdichte auf Mitarbeiteranzahl

	*/

	var width = 1080;
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

	// Counter zum Hochzählen der Wochen und der neuen Wochen-CSV Dateien
	var counter = 2;
	/*var counterTwo = 1;
	var counterThree = 2;*/

	//unwichtig, wird hier nur zusammengerechnt
	var paddingMitte = paddingSchichtart;
	var paddingSpät = paddingSchichtart + paddingSchichtart;
	var paddingGeteilt = paddingSchichtart + paddingSchichtart + paddingSchichtart;


	$( ".addWeek" ).click(function() {
		//window.location.reload();

		counter += 1;

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
					.attr("y", marginDonut);

					var g = svg.append('g')
					.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

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

		function drawIndividualValue (){

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

				$( ".individual" ).click(function() {
					drawIndividualValue();
				});

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
				.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

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

	console.log(passend+"+"+unpassend+"+"+gesamt);

	console.log(prozent);


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
	.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

	var meter = g.append('g')
	.attr('class', 'progress-meter');

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

		//var result = function(d,i){return d.Tagnummer * paddingTag + 5};

		//console.log("result: "+result);

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
	//an dieser stelle klammer für onClick funktion einbauen um button zu aktivieren!
});



//Woche zwei
var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);


d3.csv("data/template/csv/week2.csv", function(error, data){

	function drawIndividualDonut (){
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
.attr("x", xPosDonut)
.attr("y", marginDonut);

var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

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

function drawIndividualValue (){

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

	$( ".individual" ).click(function() {
		drawIndividualValue();
	});

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
.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

var meter = g.append('g')
.attr('class', 'progress-meter');

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

	function drawIndividualDonut (){
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
.attr("x", xPosDonut)
.attr("y", marginDonut);

var g = svg.append('g')
.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

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

function drawIndividualValue (){

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

	$( ".individual" ).click(function() {
		drawIndividualValue();
	});

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
.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

var meter = g.append('g')
.attr('class', 'progress-meter');

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
