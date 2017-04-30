

/*
Daniel Munoz Ortiz

Description:
Slow web, magic realism, illustration.
*/

//-------------------------------> Variables containing voice


$(document).ready(function() {

//-------------------------------> Controls the volume of music
document.getElementById("music").volume = 0.4;

scroll_color() //controls the change of color when scrolling
button_start() //controls the start button, color and actions
mango(); //Blurs and unblurs the mango on the tree.

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

  $('#mango').addClass('blur');

//When hover over the mango, remove blur
  $('#mango').hover(function () {
    $(this).removeClass('blur');
  },function () {
  });

}

function button_start(){ //-------------------------------> button_start
//Start story button change color when hover
    $("#button_start").click(function(){
      play_3();
    });
}

function play_3(){
       var audio = document.getElementById("audio_3");
       audio.play();
}
