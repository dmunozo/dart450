

/* Daniel Munoz ortiz */

//This page changes the background color constantly
//& changes name color every 10 seconds.

var circle;

$(document).ready(function() {

    $("body").addClass("background_space"); //makes background groovy
    draw_circle(); //circle function
    window.requestAnimationFrame(update);

});



function draw_circle () { //draws the circle and animates it

  var elipse = $('<div id="circle"></div>'); 
  var size = 100;
  var el_numero;

  elipse.css({ 
    position: 'absolute',
    width: size * 4 +'px',
    height: size * 4 + 'px', 
    borderRadius: size * 2 + 'px',
    top: '15%',
    left: '35%', 
    });

  $('body').append(elipse); 

    document.getElementById('circle').onmousedown = function() {

      $('#circle').toggleClass('clicked');
      $('#intro').toggleClass('clicked');
      console.log("Testing");


    }
}
//this function is supposed to update the the counter so it shows the timer go
//up to 2017 but, I cannot make it work :( it just depicts the last numer of
//the var which is 2017.
function update(){

  for (var i=0; i<2018; i++){
    $('#counter').text(i);
  }
    window.requestAnimationFrame(update);
}
