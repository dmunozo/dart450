

/*
Daniel Munoz Ortiz

Description:
Slow web, magic realism, illustration.
*/

//-------------------------------> Variables containing voice


$(document).ready(function() {

$("body").addClass("background_space"); //makes background groovy

//-------------------------------> Controls the volume of music
document.getElementById("music").volume = 0.4;

scroll_color() //controls the change of color when scrolling
button_start() //controls the start button, color and actions
mango() //Blurs and unblurs the mango on the tree.


$(".pez").hover(function(){
$(".pez").animate({
    right: Math.floor(Math.random() * 700) + "px",
    left: Math.floor(Math.random() * 700) + "px"
  });
  });


});

function scroll_color(){ //-------------------------------> Scroll_color
//Scrolling elements
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
  triggerElement: "body",
  duration: 1500
});

//Change color of background when scrolling down
scene.setTween("body", 05, {
    "backgroundColor": "#1c4d77",
});

  scene.triggerHook(0.1);
  scene.addTo(controller);

}

function mango(){ //--------------------------------------> Mango
//Add blur to the mango on page 1
$('#sign').addClass('blur2');

document.getElementById('mango').onmousedown = function() {

     $('#sign').removeClass('blur2');
     console.log("Testing");


   }


}

function button_start(){ //-------------------------------> button_start
//Start story button change color when hover
    $("#mango").click(function(){
      play_4();
    });
}

function play_4(){
       var audio = document.getElementById("audio_4");
       audio.play();
}
