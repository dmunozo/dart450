

/* Daniel Munoz ortiz */

//This page changes the background color constantly
//& changes name color every 10 seconds.



$(document).ready(function() {

    $("body").addClass("background_space");
    draw_circle();
});



function draw_circle () {

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

      setInterval(function(){

        for (var i=0; i<2018; i++){
          $('#counter').text(i);
        }
      }, 1000);

      $('#circle').toggleClass('clicked');
      $('#intro').toggleClass('clicked');
      console.log("Testing");


    }
}
