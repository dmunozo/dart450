

/* Daniel Munoz ortiz */

//This page changes the background color constantly
//& changes name color every 10 seconds.

var interval = 1000; //Sets 1000 miliseconds as interval variable

$(document).ready(function() { //Opens Jquery
  $('body').addClass('flashing'); //Adds flashing to the body


  setInterval(function () {

var date = new Date(); //Assigns date to variable
var seconds = date.getSeconds(); //Assigns seconds to variable

  $('#today').text(date); //Assigns #today ID to date

    if (seconds == "00") { //if the seconds are = to 00"
    $('p').removeClass('name6'); //remove precious class
    $('p').addClass('name1'); //add new color style
    }

    if (seconds == "10") {
    $('p').removeClass('name1');//remove precious class
    $('p').addClass('name2');
    }

    if (seconds == "20") {
    $('p').removeClass('name2');//remove precious class
    $('p').addClass('name4');
    }

    if (seconds == "30") {
    $('p').removeClass('name4');//remove precious class
    $('p').addClass('name3');
    }

    if (seconds == "40") {
    $('p').removeClass('name3');//remove precious class
    $('p').addClass('name5');
    }

    if (seconds == "50") {
    $('p').removeClass('name5');//remove precious class
    $('p').addClass('name6');
    }


},interval); //start over


});
