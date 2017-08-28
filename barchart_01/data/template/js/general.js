/* Drop Shadow on scrolled Content */


$(".allCharts").scroll(function() {
    if($(this).scrollTop()  > 0) {
        $('#section2').addClass('drop-shadow-down');
    } else {
        $('#section2').removeClass('drop-shadow-down');
    }
});

/* Swap classes
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
*/


/* individual classes  */


/* Swap classes */
var swapped = false;

function swapShifts(){

  if ( swapped == false ) {
    $('.csurplus').addClass('cmoved');
    $('.cdeficit').addClass('csurplus');
    $('.passend').addClass('fillPassend');
    $('.unpassend').addClass('fillUnpassend');
    swapped = true;
} else {
    $('.csurplus.cmoved').removeClass('cmoved');
    $('.cdeficit.csurplus').removeClass('csurplus');
    $('.passend.fillPassend').removeClass('fillPassend');
    $('.unpassend.fillUnpassend').removeClass('fillUnpassend');
    swapped = false;
}
};

$( ".swap" ).click(function() {
  swapShifts();
});
