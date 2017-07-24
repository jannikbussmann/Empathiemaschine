/* Drop Shadow on scrolled Content */


$(".allCharts").scroll(function() {
    if($(this).scrollTop()  > 0) {
        $('#section2').addClass('drop-shadow-down');    
    } else {
        $('#section2').removeClass('drop-shadow-down');
    }
});

var swapped = false;

$( ".swap" ).click(function() {
  if ( swapped == false ) {
    $('.csurplus').addClass('cmoved');
    $('.cdeficit').addClass('csurplus');
    swapped = true;
} else {
    $('.csurplus.cmoved').removeClass('cmoved');
    $('.cdeficit.csurplus').removeClass('csurplus');
    swapped = false;
}

//alert('Geklickt');
});

// LINE CHART

var chart = new Chartist.Line('.ct-chart', {
              labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
              series: [
              [90, 80, 70, 75, 90, 100, 85, 70, 80, 85, 75, 80, 75, 70, 75, 80, 75, 80, 85, 90, 80, 75, 70, 75, 80],
              [70, 80, 75, 85, 90, 95, 100, 95, 85, 90, 80, 95, 85, 100, 85, 100, 100, 85, 95, 100, 70, 100, 80, 95, 85]
              ]
            }, {

              axisY: {
                type: Chartist.FixedScaleAxis,
                divisor: 11,
                high: 110,
                low: 0
              }
            });

            // Let's put a sequence number aside so we can use it in the event callbacks
            var seq = 0,
            delays = 80,
            durations = 1500;

            // Once the chart is fully created we reset the sequence
            chart.on('created', function() {
              seq = 0;
            });

            // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
            chart.on('draw', function(data) {
              seq++;

              if(data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                  opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '1'] - 30,
                  to: data[data.axis.units.pos + '1'],
                  easing: 'easeOutQuart'
                };

                var pos2Animation = {
                  begin: seq * delays,
                  dur: durations,
                  from: data[data.axis.units.pos + '2'] - 100,
                  to: data[data.axis.units.pos + '2'],
                  easing: 'easeOutQuart'
                };

                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
                };

                data.element.animate(animations);
              }
            });

            // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
            /*chart.on('created', function() {
              if(window.__exampleAnimateTimeout) {
                clearTimeout(window.__exampleAnimateTimeout);
                window.__exampleAnimateTimeout = null;
              }
              window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
            });*/

