

/*
Exploding Circles
Daniel Munoz Ortiz

This webpage is intended to move the circles to random locations by
generating 10 circles using and array and animating them using another array.
*/



var insultStrings = [
  "What are you doing?",
  "Hey what's up?",
  "I don't have all day",
  "Hurry up cowboy",
  "Dude!",
  "You are so stupid!"
];

var params = {
  pitch: 1,
  rate: 0.9,
  volume: 1,
  onend: finishTalking,
}

var talkingNow = false;

console.log("It's me!");

//.........................Starts everything
$(document).ready(function() {


  $("body").addClass("background_space"); //makes background groovy
  drawCircle();
  drawCircle2();
  drawCircle3();
  drawCircle4();
  drawCircle5();

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
        speechIsReady();
        $(".title").addClass("goup");
        $(".elipse").addClass("elipse1");
        $(".elipses").addClass("full");
        $(".subtitle").addClass("vanish");
    });

    $(".elipses").click(function(){
      speech2();
        $(".elipses").animate({
              right: Math.floor(Math.random() * 100) + "px",
              left: Math.floor(Math.random() * 1200) + "px"
        });
        $(".elipses").hover(function(){
          if (!talkingNow) {
            speech3();
          }
            $(".elipses").animate({
          right: Math.floor(Math.random() * 100) + "px",
          left: Math.floor(Math.random() * 1200) + "px"
        });
        });
    });


});

//.........................Draws one circle
function drawCircle(){

  var circle = $('<div class="elipse"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '50' + '%',
    left: '45' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
    zIndex:'1',
  });

      console.log("Testing");
        $('body').append(circle);
}

function drawCircle2(){

  var circle = $('<div class="elipses"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '50' + '%',
    left: '30' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
    opacity:'0',
  });

      console.log("TestingCircle2");
        $('body').append(circle);
}

function drawCircle3(){

  var circle = $('<div class="elipses"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '50' + '%',
    left: '45' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
    opacity:'0',
  });

      console.log("TestingCircle2");
        $('body').append(circle);
}

function drawCircle4(){

  var circle = $('<div class="elipses"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '50' + '%',
    left: '60' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
    opacity:'0',
  });

      console.log("TestingCircle2");
        $('body').append(circle);
}

function drawCircle5(){

  var circle = $('<div class="elipses"></div>');

  circle.css({
    position: 'absolute',
    width: '100' + 'px',
    height: '100' + 'px', 
    top: '50' + '%',
    left: '75' + '%', 
    borderRadius: '100' + 'px',
    backgroundColor: '#fcf2bf',
    opacity:'0',
  });

      console.log("TestingCircle2");
        $('body').append(circle);
}

function speechIsReady () {
  responsiveVoice.speak("Hello, welcome to this place, it is a webpage. Click on the other four circles in order to start", "UK English Male",{rate: 0.9});
}

function speech2(){
    responsiveVoice.speak("Wait... what the fuck did you do?", "UK English Male",{rate: 0.9});
}

function speech3(){
  console.log("speech3()")

    responsiveVoice.speak(getRandomString(insultStrings), "UK English Male", params);
    talkingNow = true;
}

function finishTalking() {
  talkingNow = false;
  console.log("Finished talking!")
}



function getRandomString(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
