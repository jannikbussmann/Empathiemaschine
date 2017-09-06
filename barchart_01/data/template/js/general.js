/* Drop Shadow on scrolled Content */


$(".allCharts").scroll(function() {
    if($(this).scrollTop()  > 0) {
        $('#section2').addClass('drop-shadow-down');
    } else {
        $('#section2').removeClass('drop-shadow-down');
    }
});


/* DEMO-MODE */

function statusWifi() {
    if(navigator.onLine) {
        $('.statusWifi').html('Aktiv');
    }
    else {
        $('.statusWifi').html("Inaktiv");
    }


    window.addEventListener("online", function(e) {
        $('.statusWifi').html('aktiv');
    });
    window.addEventListener("offline", function(e) {
        $('.statusWifi').html("inaktiv");
    });


}

statusWifi();


/*var checkbox = $('#individual')
$('#individual').click(function(){
    checkbox.attr("checked", true);
});
*/
var checkbox = $('#individual')

$('#individual').click(function () {
    if ($(this).is(':checked')) {
        checkbox.attr("checked", true);
        //that.pageselected = true;
    } else {
        checkbox.attr("checked", false);
        //that.pageselected = false;
    }

    if ($('#individual').is(':checked')) {
        drawIndividualLines();
        drawIndividualLegend();
        swapShifts();
    } else {
        deleteIndividualLines();
        //drawIndividualLegend();
        swapShifts();

        //Hier muss die
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
/*var swapped = false;

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
});*/
