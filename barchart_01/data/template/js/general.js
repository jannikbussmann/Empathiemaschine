$(document).ready(function() {
  var statusTimer = null;
  var timer1, timer2, timer3, timer4;
  var baseURL = "https://api.spark.io/v1/devices/";

  //--------------------------------------------------------------
  // USER DATA
  //
  var accessToken = "0704e0d723377ecab782c74a6cc9f3ce5d688f40";
  var coreID = "2c001f000247343337373739";
  // App Heading
  var appHeading = "Remote Photon";
  // Variable 1
  var varKey1 = "SENSORWERT";
  var var1onLabel = "Running!";
  var var1offLabel = "Stopped";
  var var1onState = null; // Set to null to allow raw value to be displayed.
  var var1offState = null; // Set to null to allow raw value to be displayed.
  var refresh1 = 1000;
  // Variable 2
  var varKey2 = "RFIDSCAN";
  var var2onLabel = "Open!";
  var var2offLabel = "Closed.";
  var var2onState = 1; // Set to null to allow raw value to be displayed.
  var var2offState = 0; // Set to null to allow raw value to be displayed.
  var refresh2 = 1000;


  //Current Variables
  var curIR;
  var curRFID;
  //
  //--------------------------------------------------------------

  // Update app heading
  $("#app-heading").html(appHeading);
  $(".btn-lg").css({"width":"60%"});
  $(".form-control").css({"display":"inline","width":"35%"});

  // Hide variable text fields if not in use.
  if(refresh1 === 0) $("#var-val-1").hide();
  if(refresh2 === 0) $("#var-val-2").hide();


  // Auto-refresh
  if(refresh1) {
    $("#get-var-1").attr("disabled", "disabled");
    timer1 = setInterval(function () {
      getVariable1();
    }, refresh1);
  }
  if(refresh2) {
    $("#get-var-2").attr("disabled", "disabled");
    timer2 = setInterval(function () {
      getVariable2();
    }, refresh2);
  }

  ////
  // Alerts
  ////
  $("#info-alert").alert();
  $("#info-alert").affix();

  ////
  // Methods
  ////
  function onMethodSuccess() {
    alertT = $("#info-alert");
    alertT.text("Success!").removeClass("alert-danger").addClass("alert-success");
    if(statusTimer != null) {
      clearTimeout(statusTimer);
      alertT.hide();
      setTimeout(function() {
        alertT.show();
        statusTimer = setTimeout(function() {
          statusTimer = null;
          alertT.hide();
        }, 1750);
      }, 250);
    }
    else {
      alertT.show();
      statusTimer = setTimeout(function() {
        statusTimer = null;
        alertT.hide();
      }, 2000);
    }
  }

  function onMethodFailure(data) {
    alertT = $("#info-alert");
    alertT.text((data)?"Error! "+data:"Error!").removeClass("alert-success").addClass("alert-danger");
    if(statusTimer != null) {
      clearTimeout(statusTimer);
      alertT.hide();
      setTimeout(function() {
        alertT.show();
        statusTimer = setTimeout(function() {
          statusTimer = null;
          alertT.hide();
        }, 1750);
      }, 250);
    }
    else {
      alertT.show();
      statusTimer = setTimeout(function() {
        statusTimer = null;
        alertT.hide();
      }, 2000);
    }
  }

  // The base level run method command
  function doMethod(method, data) {
    var url = baseURL + coreID + "/" + method;
    $.ajax({
      type: "POST",
      url: url,
      data: {
        access_token: accessToken,
        args: data
      },
      dataType: "json"
    }).success(function(obj) {
      console.log(obj);
      (obj.return_value && obj.return_value == 200) ? onMethodSuccess() : onMethodFailure((obj.error)?obj.error:"");
    }).fail(function(obj) {
      onMethodFailure();
    });
  }
  ////
  // Variables
  ////
  function getVariable(variable, callback) {
    var url = baseURL + coreID + "/" + variable + "?access_token=" + accessToken;
    $.ajax({
      url: url,
      dataType: "json"
    }).success(function(obj) {
      console.log(obj);
      (obj.coreInfo.deviceID && obj.coreInfo.deviceID == coreID) ? onMethodSuccess() : onMethodFailure((obj.error)?obj.error:"");
      callback(obj.result);
    }).fail(function(obj) {
      onMethodFailure();
    });
  }

  // Get variable methods
  function getVariable1() {
    getVariable(varKey1, function (res) {
      if(res === var1onState)
      $("#var-val-1").val(var1onLabel);
      else if(res === var1offState)
      $("#var-val-1").val(var1offLabel);
      else
      $("#var-val-1").val(res);

      curIR = res;
      console.log(curIR);

    });
  }
  function getVariable2() {
    getVariable(varKey2, function (res) {
      if(res === var2onState)
      $("#var-val-2").val(var2onLabel);
      else if(res === var2offState)
      $("#var-val-2").val(var2offLabel);
      else
      $("#var-val-2").val(res);

      curRFID = res;
      console.log(curRFID);

    });
  }





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

  /*
  function triggerIndividual() {
  drawIndividualLines();
  drawIndividualLegend();
  swapShifts();
}

function revertIndividual() {
deleteIndividualLines();
drawGeneralLegend();
swapShifts();
}*/

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
      //drawIndividualLines();
      drawIndividualLegend();
      swapShifts();
    } else {
      deleteIndividualLines();
      drawGeneralLegend();
      swapShifts();
    }

  });

});
