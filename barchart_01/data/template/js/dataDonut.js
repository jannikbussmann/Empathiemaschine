var colors = {
    'green': '#00F19F',
    'other':'#E98A82',
    'red':'#303030'
};

var color = colors.green;
var red = colors.red;
var other = colors.other;


var circleradius = 100;
var border = 45;
var padding = 30;
var startPercent = 0;
var full = 1;

var twoPi = Math.PI * 2;
var formatPercent = d3.format('.0%');
var boxSize = (circleradius + padding) * 2;
var circleHeight = 400;





$( ".addWeek" ).click(function() {
    d3.csv("data/template/csv/week"+counter+".csv", function(error, data){


    });
});




d3.csv("data/template/csv/week1.csv", function(error, data){

    var avg = d3.sum(data, function(d){
                return d.Tagnummer; 
            }) / data.length;

    console.log(avg);



        var endPercent = avg/10;
        var count = Math.abs((endPercent - startPercent) / 0.01);
        var countTwo = Math.abs((full - startPercent) / 0.01);

        var step = endPercent < startPercent ? -0.01 : 0.01;
        var stepTwo = full < startPercent ? -0.01 : 0.01;
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(circleradius)
            .outerRadius(circleradius - border);



        var parent = d3.select('.two');

        var svg = parent.append('svg')
            .attr('width', boxSize)
            .attr('height', circleHeight);

        var g = svg.append('g')
            .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

        var meter = g.append('g')
            .attr('class', 'progress-meter');

        meter.append('path')
            .attr('class', 'background')
            .attr('fill', red)
            .attr('fill-opacity', 1)
            .attr('d', arc.endAngle(twoPi));

        var middle = meter.append('path')
            .attr('class', 'middle')
            .attr('fill', other)
            .attr('fill-opacity', 1);

        var foreground = meter.append('path')
            .attr('class', 'foreground')
            .attr('fill', color)
            .attr('fill-opacity', 1);

        var numberText = meter.append('text')
            .attr('fill', '#fff')
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

});


d3.csv("data/template/csv/week2.csv", function(error, data){

});








