

/*
Assigment 01
Daniel Munoz Ortiz

This is a story generator, its intended to generate a story by combining different arrays
that contain parts of the story and guiding the user through a space in the web.
*/

//Dialog strings
var openingString = [
  "This is how a story begins...",
  "Once upon a time...",
  "At the beginning of our story...",
  "This is how everything started...",
  "When everything started...",
  "and everything started..."
];
//Dialog strings
var p2String = [
  "...Our main character is a sailor, who navegates the vastness of the web...",
  "...He is traveling the vastness of the web. A sailor... ",
  "...the main character of this story travels the web, sails the net... ",
  "...Him, who wanders the remote vastness of the web..."
];
//Dialog strings
var p3String = [
  "...adventurous through uknown lands...",
  "...always looking for new things to see and experience... ",
  "...well known for his adventures, always seeking the different... ",
  "...always looking for something new, for something different...",
  "...craving for adventure, he is always moving around this world...",
];
//Dialog strings
var p4String = [
  "...something bothered him...",
  "...there was something is his head annoying him... ",
  "...something was causing him unease... ",
  "...there was something uneasing him...",
  "...something dakenned his thoughts...",
];
//Dialog strings
var p5String = [
  "...the thought of going nowhere...",
  "...the idea of not being real... ",
  "...the thought of being captive in his own reality... ",
  "...the feeling of being a prisioner of his own ideas...",
  "...the feeling of not being real, ephemeral...",
];
//Dialog strings
var p6String = [
  "...maybe nothing is as real as it seems...",
  "...perhaps the world is not they way it looks... ",
  "...maybe reality is just an illusion... ",
  "...perhaps existence is not as meaninful as it seems...",
  "...maybe there is nothing beyond, maybe there was nothing before...",
];
//Dialog strings
var p7String = [
  "...'Why out of a sudden everything seems so monotonous?'...",
  "...'Why do I feel I have been here before?'... ",
  "...'Why do I feel I have seen all of these before?'... "
];
//Dialog strings
var p8String = [
  "...The waves of the sea repeated a pattern again and again...",
  "...The clouds in the sky drew the same shapes again and again... ",
  "...The wind whistle the same song again and again... "
];
//Dialog strings
var p9String = [
  "...I dont know who I am! I don't know anything about myself!...",
  "...I dont know my name! I don't know who I am!'... ",
  "...I don't know anything about myself! I dont know who I am!... "
];
//Dialog strings
var p10String = [
  "...The sailor realized he had been in this place before, many times",
  "...The sailor realized he had sailed this water before, many times ",
  "...The sailor now knew he had been here several times before, many times",
  "...The sailor understood he was retracing his steps, many times"
];

//.........................Starts everything
$(document).ready(function() {


  $("body").addClass("background_space"); //makes background groovy
  $(window).scroll(function(){ //When scrolling hide title

    $('.title').addClass('move');
  });

  //Functions
  startStory();
  paragraph2()
  paragraph3()
  paragraph4()
  paragraph5()
  paragraph6()
  paragraph7()
  paragraph8()
  paragraph9()
  paragraph10()
});


//story functions... populates <p> with array content
function startStory(){
   $('.p1').text(getRandomString(openingString));
}

function paragraph2(){
   $('.p2').text(getRandomString(p2String));
}

function paragraph3(){
   $('.p3').text(getRandomString(p3String));
}

function paragraph4(){
   $('.p4').text(getRandomString(p4String));
}

function paragraph5(){
   $('.p5').text(getRandomString(p5String));
}

function paragraph6(){
   $('.p6').text(getRandomString(p6String));
}

function paragraph7(){
   $('.p7').text(getRandomString(p7String));
}

function paragraph8(){
   $('.p8').text(getRandomString(p8String));
}

function paragraph9(){
   $('.p10').text(getRandomString(p9String));
}

function paragraph10(){
   $('.p11').text(getRandomString(p10String));
}

//Selects random paragraph from array

function getRandomString(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
