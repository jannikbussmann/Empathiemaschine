var w = 1060,
h = 400,
padding = 25;

var dataset = [
	[1, (Math.floor(Math.random() * 50) + 50)],
	[2, (Math.floor(Math.random() * 50) + 50)],
	[3, (Math.floor(Math.random() * 50) + 50)],
	[4, (Math.floor(Math.random() * 50) + 50)],
	[5, (Math.floor(Math.random() * 50) + 50)],
	[6, (Math.floor(Math.random() * 50) + 50)],
	[7, (Math.floor(Math.random() * 50) + 50)],
	[8, (Math.floor(Math.random() * 50) + 50)],
	[9, (Math.floor(Math.random() * 50) + 50)],
	[10, (Math.floor(Math.random() * 50) + 50)],
	[11, (Math.floor(Math.random() * 50) + 50)],
	[12, (Math.floor(Math.random() * 50) + 50)],
	[13, (Math.floor(Math.random() * 50) + 50)],
	[14, (Math.floor(Math.random() * 50) + 50)],
	[15, (Math.floor(Math.random() * 50) + 50)],
	[16, (Math.floor(Math.random() * 50) + 50)],
	[17, (Math.floor(Math.random() * 50) + 50)],
	[18, (Math.floor(Math.random() * 50) + 50)],
	[19, (Math.floor(Math.random() * 50) + 50)],
	[20, (Math.floor(Math.random() * 50) + 50)],
	[21, (Math.floor(Math.random() * 50) + 50)],
	[22, (Math.floor(Math.random() * 50) + 50)],
	[23, (Math.floor(Math.random() * 50) + 50)],
	[24, (Math.floor(Math.random() * 50) + 50)],
	[25, (Math.floor(Math.random() * 50) + 50)],
	[26, (Math.floor(Math.random() * 50) + 50)],
	[27, (Math.floor(Math.random() * 50) + 50)],
	[28, (Math.floor(Math.random() * 50) + 50)],
	[29, (Math.floor(Math.random() * 50) + 50)],
	[30, (Math.floor(Math.random() * 50) + 50)],
	[31, (Math.floor(Math.random() * 50) + 50)],
	[32, (Math.floor(Math.random() * 50) + 50)],
	[33, (Math.floor(Math.random() * 50) + 50)],
	[34, (Math.floor(Math.random() * 50) + 50)],
	[35, (Math.floor(Math.random() * 50) + 50)],
	[36, (Math.floor(Math.random() * 50) + 50)],
	[37, (Math.floor(Math.random() * 50) + 50)],
	[38, (Math.floor(Math.random() * 50) + 50)],
	[39, (Math.floor(Math.random() * 50) + 50)],
	[40, (Math.floor(Math.random() * 50) + 50)],
	[41, (Math.floor(Math.random() * 50) + 50)],
	[42, (Math.floor(Math.random() * 50) + 50)],
	[43, (Math.floor(Math.random() * 50) + 50)],
	[44, (Math.floor(Math.random() * 50) + 50)],
	[45, (Math.floor(Math.random() * 50) + 50)],
	[46, (Math.floor(Math.random() * 50) + 50)],
	[47, (Math.floor(Math.random() * 50) + 50)],
	[48, (Math.floor(Math.random() * 50) + 50)],
	[49, (Math.floor(Math.random() * 50) + 50)],
	[50, (Math.floor(Math.random() * 50) + 50)],
	[51, (Math.floor(Math.random() * 50) + 50)],
	[52, (Math.floor(Math.random() * 50) + 50)]
];

var datasetIndividual = [
	[1, (Math.floor(Math.random() * 50) + 50)],
	[2, (Math.floor(Math.random() * 50) + 50)],
	[3, (Math.floor(Math.random() * 50) + 50)],
	[4, (Math.floor(Math.random() * 50) + 50)],
	[5, (Math.floor(Math.random() * 50) + 50)],
	[6, (Math.floor(Math.random() * 50) + 50)],
	[7, (Math.floor(Math.random() * 50) + 50)],
	[8, (Math.floor(Math.random() * 50) + 50)],
	[9, (Math.floor(Math.random() * 50) + 50)],
	[10, (Math.floor(Math.random() * 50) + 50)],
	[11, (Math.floor(Math.random() * 50) + 50)],
	[12, (Math.floor(Math.random() * 50) + 50)],
	[13, (Math.floor(Math.random() * 50) + 50)],
	[14, (Math.floor(Math.random() * 50) + 50)],
	[15, (Math.floor(Math.random() * 50) + 50)],
	[16, (Math.floor(Math.random() * 50) + 50)],
	[17, (Math.floor(Math.random() * 50) + 50)],
	[18, (Math.floor(Math.random() * 50) + 50)],
	[19, (Math.floor(Math.random() * 50) + 50)],
	[20, (Math.floor(Math.random() * 50) + 50)],
	[21, (Math.floor(Math.random() * 50) + 50)],
	[22, (Math.floor(Math.random() * 50) + 50)],
	[23, (Math.floor(Math.random() * 50) + 50)],
	[24, (Math.floor(Math.random() * 50) + 50)],
	[25, (Math.floor(Math.random() * 50) + 50)],
	[26, (Math.floor(Math.random() * 50) + 50)],
	[27, (Math.floor(Math.random() * 50) + 50)],
	[28, (Math.floor(Math.random() * 50) + 50)],
	[29, (Math.floor(Math.random() * 50) + 50)],
	[30, (Math.floor(Math.random() * 50) + 50)],
	[31, (Math.floor(Math.random() * 50) + 50)],
	[32, (Math.floor(Math.random() * 50) + 50)],
	[33, (Math.floor(Math.random() * 50) + 50)],
	[34, (Math.floor(Math.random() * 50) + 50)],
	[35, (Math.floor(Math.random() * 50) + 50)],
	[36, (Math.floor(Math.random() * 50) + 50)],
	[37, (Math.floor(Math.random() * 50) + 50)],
	[38, (Math.floor(Math.random() * 50) + 50)],
	[39, (Math.floor(Math.random() * 50) + 50)],
	[40, (Math.floor(Math.random() * 50) + 50)],
	[41, (Math.floor(Math.random() * 50) + 50)],
	[42, (Math.floor(Math.random() * 50) + 50)],
	[43, (Math.floor(Math.random() * 50) + 50)],
	[44, (Math.floor(Math.random() * 50) + 50)],
	[45, (Math.floor(Math.random() * 50) + 50)],
	[46, (Math.floor(Math.random() * 50) + 50)],
	[47, (Math.floor(Math.random() * 50) + 50)],
	[48, (Math.floor(Math.random() * 50) + 50)],
	[49, (Math.floor(Math.random() * 50) + 50)],
	[50, (Math.floor(Math.random() * 50) + 50)],
	[51, (Math.floor(Math.random() * 50) + 50)],
	[52, (Math.floor(Math.random() * 50) + 50)]
];

var myData = "date	Allgemein	Individuell\n\
1	63.4	62.7\n\
2	58.0	59.9\n\
3	53.3	59.1\n\
4	55.7	58.8\n\
5	64.2	58.7\n\
6	58.8	57.0\n\
7	57.9	56.7\n\
8	61.8	56.8\n\
9	69.3	56.7\n\
10	71.2	60.1\n\
11	68.7	61.1\n\
12	61.8	61.5\n\
13	63.0	64.3\n\
14	66.9	67.1\n\
15	61.7	100.0\n\
16	61.8	61.6\n\
17	62.8	61.1\n\
18	60.8	59.2\n\
19	62.1	58.9\n\
20	65.1	57.2\n\
21	55.6	56.4\n\
22	54.4	60.7\n";

/*20111001	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111002	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111003	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111004	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111005	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111006	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111007	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111008	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111009	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111010	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111011	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111012	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111013	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111014	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111015	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111016	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111017	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111018	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111019	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111020	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111021	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n\
20111022	(Math.floor(Math.random() * 50) + 50)	(Math.floor(Math.random() * 50) + 50)\n";*/

var margin = {
        top: 20,
        right: 80,
        bottom: 30,
        left: 50
      },
      width = 1060 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    //var parseDate = d3.time.format("%Y%m%d").parse;

    var x = d3.scale.linear()
      .range([0, width]);

    var y = d3.scale.linear()
      .range([height, 0]);

    var color = d3.scale.category10();

		var color = d3.scale.ordinal()
	  .domain(["Algemein", "Individuell"])
	  .range(["#A0B1AB", "#00F19F"]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    var line = d3.svg.line()
      .interpolate("monotone")
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.temperature);
      });

    var svg = d3.select(".linechart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = d3.tsv.parse(myData);

    color.domain(d3.keys(data[0]).filter(function(key) {
      return key !== "date";
    }));

    data.forEach(function(d) {
			//return d.date = parseDate(d.date);
      return d.date;
    });

    var cities = color.domain().map(function(name) {
      return {
        name: name,
        values: data.map(function(d) {
          return {
            date: d.date,
            temperature: +d[name]
          };
        })
      };
    });

    x.domain(d3.extent(data, function(d) {
      return d.date;
    }));

    y.domain([
      d3.min(cities, function(c) {
        return d3.min(c.values, function(v) {
          return v.temperature;
        });
      }),
      d3.max(cities, function(c) {
        return d3.max(c.values, function(v) {
          return v.temperature;
        });
      })
    ]);

    var legend = svg.selectAll('g')
      .data(cities)
      .enter()
      .append('g')
      .attr('class', 'legend');

    legend.append('rect')
      .attr('x', width - 20)
      .attr('y', function(d, i) {
        return i * 20;
      })
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', function(d) {
        return color(d.name);
      });

    legend.append('text')
      .attr('x', width - 8)
      .attr('y', function(d, i) {
        return (i * 20) + 9;
      })
      .text(function(d) {
        return d.name;
      });

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Temperature (ºF)");

    var city = svg.selectAll(".city")
      .data(cities)
      .enter().append("g")
      .attr("class", "city");

    city.append("path")
      .attr("class", "line")
      .attr("d", function(d) {
        return line(d.values);
      })
      .style("stroke", function(d) {
        return color(d.name);
      });

    city.append("text")
      .datum(function(d) {
        return {
          name: d.name,
          value: d.values[d.values.length - 1]
        };
      })
      .attr("transform", function(d) {
        return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")";
      })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) {
        return d.name;
      });

			city.selectAll("circle")
    .data(function(d){return d.values})
    .enter()
    .append("circle")
    .attr("r", 3)
    .attr("cx", function(d) { return x(d.date); })
    .attr("cy", function(d) { return y(d.temperature); })
    .style("fill", function(d,i,j) { return color(cities[j].name); });


    var mouseG = svg.append("g")
      .attr("class", "mouse-over-effects");

    mouseG.append("path") // this is the black vertical line to follow mouse
      .attr("class", "mouse-line")
      .style("stroke", "black")
      .style("stroke-width", "1px")
      .style("opacity", "0");

    var lines = document.getElementsByClassName('line');

    var mousePerLine = mouseG.selectAll('.mouse-per-line')
      .data(cities)
      .enter()
      .append("g")
      .attr("class", "mouse-per-line");

    mousePerLine.append("circle")
      .attr("r", 7)
      .style("stroke", function(d) {
        return color(d.name);
      })
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

				//Donut Beschriftung
				meter.append("text")
				.attr("x", 110)
				.attr("y", -45)
				.attr("dy", "0em")
				.text("Ihr Wunscherfüllungs-")
				.style("fill", "white");

				//Donut Beschriftung
				meter.append("text")
				.attr("x", 110)
				.attr("y", -45)
				.attr("dy", "1.4em")
				.text("grad in %")
				.style("fill", "white");

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
						$("h1").text("Individuelle Übersicht");
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
	.attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');


	var meter = g.append('g')

	.attr('class', 'progress-meter');

	//Donut Beschriftung
	meter.append("text")
	.attr("x", 110)
	.attr("y", -45)
	.attr("dy", "0em")
	.text("Wunscherfüllungsgrad")
	.style("fill", "white");

	//Donut Beschriftung
	meter.append("text")
	.attr("x", 110)
	.attr("y", -45)
	.attr("dy", "1.4em")
	.text("gesamt in %")
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
		.text("KW" + counter )
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
	//an dieser stelle klammer für onClick funktion einbauen um button zu aktivieren!
});



//Woche zwei
var two = d3.select(".two").append("svg")
.attr("width", width)
.attr("height",height);


d3.csv("data/template/csv/week5.csv", function(error, data){

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

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "0em")
.text("Ihr Wunscherfüllungs-")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "1.4em")
.text("grad in %")
.style("fill", "white");

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
		$("h1").text("Individuelle Übersicht");
	});

};

drawIndividualDonut();
});

d3.csv("data/template/csv/week2.csv", function(error, data){




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

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "0em")
.text("Wunscherfüllungsgrad")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "1.4em")
.text("gesamt in %")
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

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "0em")
.text("Ihr Wunscherfüllungs-")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "1.4em")
.text("grad in %")
.style("fill", "white");

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
		$("h1").text("Individuelle Übersicht");
		/*$("h1").fadeOut(function() {
		  $(this).text("Individuelle Übersicht").fadeIn();
		});*/
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

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "0em")
.text("Wunscherfüllungsgrad")
.style("fill", "white");

//Donut Beschriftung
meter.append("text")
.attr("x", 110)
.attr("y", -45)
.attr("dy", "1.4em")
.text("gesamt in %")
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
