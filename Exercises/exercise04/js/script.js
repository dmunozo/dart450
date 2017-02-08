

/*
Exploding Circles
Daniel Munoz Ortiz

This webpage is intended to move the circles to random locations by
generating 10 circles using and array and animating them using another array.
*/


var circlesNumber=10; //amount of circles

circlesArray = new Array(circlesNumber);



//.........................Starts everything
$(document).ready(function() {

  $("body").addClass("background_space"); //makes background groovy
  drawLotsCircles();


//.........................When Clicking:

/*
Pippin, I tried several ways to apply the animate() function
to the circlesArray but I couldn't make it work so each
circle goes in different direction, it seems to apply the animation
10 times to all circles at the same time instead of applying it one time
to each circle individually. It creates a cool effect though, but
all circles move in the same direction -- fail.
*/
    $(".elipse").click(function(){
        for (var i=0; i<circlesArray.length; i++){
          circlesArray[i]= $(".elipse").animate({

              top: Math.floor(Math.random() * 100) + "px",
              left: Math.floor(Math.random() * 1200) + "px"

          });
        }
    });
});



//.........................Draws a lot of circles
function drawLotsCircles(){

  for (var i=0; i<circlesArray.length; i++){
    circlesArray[i]= drawCircle();
    $('body').append(circlesArray[i]);
    console.log(i);
  }

}

//.........................Draws one circle
function drawCircle(){

  var circle = $('<div class="elipse"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '45' + '%',
    left: '45' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
  });

      console.log("Testing");
      return circle;
}
