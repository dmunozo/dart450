

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


});

function scroll_color(){ //-------------------------------> Scroll_color
//Scrolling elements
  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
  triggerElement: "body",
  duration: 500
});

//Change color of background when scrolling down
scene.setTween("body", 05, {
    "backgroundColor": "#121d23",
});

  scene.triggerHook(0.9);
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
      $("#birds").addClass("birds-motion");
      play_1();
    });
}

function play_1(){
       var audio = document.getElementById("audio_1");
       audio.play();
}
