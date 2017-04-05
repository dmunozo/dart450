

/*
Daniel Munoz Ortiz

Description:
Slow web, magic realism, illustration.
*/

var params = {
  pitch: 0.9,
  rate: 0.9,
  volume: 1,
  onend: finishTalking,
}

var talkingNow = false;

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
      $("#instructions").addClass("instructionsVisible");
      speechIsReady_1();
    });
}

function speechIsReady_1 () {//-------------------------------> First Paragraph

  responsiveVoice.speak("I still remember the last time I smelled the valley. A warm breeze, gathering the scent of the fruit. I was leaving the wild. And I was leaving the nectar. I was leaving my land. I was leaving to the big city. To learn the numbers. To learn the machine. To come back. And teach the ways to my people.", "UK English Male", params);
  responsiveVoice.speak("Hover over those trees and find the mango in order to continue.", "UK English Male", params);
}

function finishTalking() {
  talkingNow = false;
  console.log("Finished talking!")
}
