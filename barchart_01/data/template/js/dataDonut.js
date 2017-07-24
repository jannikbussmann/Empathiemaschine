var dataset = {things: [40, 60],};
var width = 315;
var height = 315;
var radius = Math.min(width, height) / 2;
var color = d3.scale.category20();
var pie = d3.layout.pie().sort(null);
var arc = d3.svg.arc()
    .innerRadius(radius - 85)
    .outerRadius(radius - 50);
var svg = d3.select("#donut")
    .append("svg")
    .attr("width", width)
    .attr("height", 264)
    .append("g")
    .attr("transform", "translate(" 
        + width / 2.090 + "," 
        + height / 2.38  + ")");
var path = svg.selectAll("path")
    .data(pie(dataset.things))
    .enter().append("path")
    .attr("fill", function(d, i) { return getColors(i); })
    .attr("d", arc);