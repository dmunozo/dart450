/*

Haiku
Daniel Munoz Ortiz

Haiku Generator

*/



$(document).ready(function() {


  $("#button").hover(function(){
    $(this).css("background-color", "#f47741");
  },function () {
    $(this).css("background-color", "#f44e42");
  });


  $("#button").click(function(){
    $.getJSON('data/data.json', gotData);
  });
});


function getRandomHaiku(data) {
  var randomHaikuIndex = Math.floor(Math.random() * data.haikus.length);
  return data.haikus[randomHaikuIndex];
}

function gotData ( data ) {

  var haiku = getRandomHaiku(data);

  // Insert the data onto our webpage
  $('#sentence_1').html(haiku[0]);
  $('#sentence_2').html(haiku[1]);
  $('#sentence_3').html(haiku[2]);

}
