var width = 2000;
var height = 500;

//add an svg canvas to the page
var svg = d3.select(".chart")
.append("svg")

.attr("width", width)
.attr("height",height);

//set up some basic data
d3.csv("weekOne.csv", function(error, data){





var groups = svg.selectAll("g")
        .data(data)
        .enter()
    .append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });
  
groups.each(function(d,i) {
    for (var x = 1; x <= d.Frühschicht; x++) {
      d3.select(this).append('circle')
      .attr({cx: function(d,i) { return (x + 1) * 22; } ,
             cy: 5 ,
             r: 5 ,
             fill: function(d,i) { return x == d.selected ? "#e74c3c" : "#1abc9c" }
       }); 
    }
});
})