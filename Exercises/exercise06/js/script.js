/*
Attention Seeker
Pippin Barr
The code to make the webpage look for a face in the webcam and
be happy or sad based on whether it can see someone or not.
*/

// How often to check for whether we've lost the face...
const INTERVAL = 100;
// How fast the emoticon faces should fade in and out
const ANIMATION_DURATION = 1000;
// We need to have some maximum amount of time the page can feel
// okay about not seeing a face (millis)
const MAX_TIME_SINCE_FACE = 1000;
// Track how long it has been since the page has seen a face,
// start on a high value so it assumes it hasn't seen one for a long time
var timeSinceFace = 1000000;
// Use our favourite british voice
var voice = 'UK English Male';
// And tweak the parameters
var voiceParameters = {
  pitch: 1,
  rate: 0.7,
  volume: 1
}

// Two arrays of strings, one set for when the page thinks it
// has "lost" you and the other for when it has "found" you.
// The script will choose a random string from the array and
// use responsive voice to speak it when the appropriate event happens.
var sadStrings = [
  "Where are you?",
  "Where did you go?",
  "I miss you!",
  "Don't leave me alone...",
  "Come back!",
  "Where have you gone?",
  "Please don't leave me...",
  "Don't abandon me!",
  "I can't bear not seeing your face!",
  "Return to me, lover!"
];
var happyStrings = [
  "There you are.",
  "You're so beautiful.",
  "Gaze into my eyes.",
  "Let's look at each other forever.",
  "You complete me.",
  "Let's stay like this forever.",
  "Never leave me.",
  "Say you'll never leave me.",
  "It's like a dream just looking at you.",
  "I love you so much."
];


$(document).ready(function() {

  // Do the getUserMedia stuff
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({video: true}, handleVideo, videoError);
  }
});

// handleVideo (stream)
//
// When getUserMedia gets hold of the user's webcam, it calls this function
// with the argument "stream" which is the stream of the webcam data
function handleVideo(stream) {
  // First get the URL of the stream
  var streamURL = window.URL.createObjectURL(stream);
  // Now hold of the element on the page that can contain the video
  // (the video element with id 'webcam') and set its src attribute
  // to the URL we created for the stream...
  $('#webcam').attr({
    src: streamURL
  });
  // And now that the webcam is available, we can start actually tracking
  // colors with our tracking.js code...
  startTracking();
}

// videoError (e)
//
// If there's a problem with getting the webcam, this will get called.
// For now it just sets the background color to red to show something
// went wrong. Not very sophisticated.
function videoError(e) {
  $('body').css({
    'background-color': 'red'
  })
}

// startTracking()
//
// Called when webcam is available. Sets up the face tracking.
function startTracking() {

  // Make a face tracker...
  var faceTracker = new tracking.ObjectTracker(['face']);

  // Set up the function to call each frame while tracking
  faceTracker.on('track', handleTrackingEvent);

  // Start tracking
  tracking.track('#webcam', faceTracker);

  // Also start an interval function that will check if the page
  // should become sad
  setInterval(checkSad,INTERVAL);
}

// updateFeelings ()
//
// Called every INTERVAL - updates how the page is feeling based on
// when it last saw our face...
function checkSad () {
  // Update our variable tracking how long it's been since we saw a face...
  timeSinceFace += 100;
  // Note this is set back to 0 every frame that the tracker detects a face.

  // Check whether it's been too long since we saw a face
  // AND the happy face is still full opacity (i.e. not animating away)
  if (timeSinceFace > MAX_TIME_SINCE_FACE && $('#happy').css('opacity') == 1) {
    // If so, animate in the sad face and animate out the happy face
    $('#sad').animate({
      opacity: 1
    },ANIMATION_DURATION);
    $('#happy').animate({
      opacity: 0
    },ANIMATION_DURATION);
    // Say a random string from our sad lines
    responsiveVoice.speak(getRandomString(sadStrings),voice,voiceParameters);
  }
}

// handleTrackingEvent
//
// Called every frame of video that detection is running
function handleTrackingEvent (event) {
  // Check if anything was tracked (a face)
  if (event.data.length === 0) {
    // No faces were detected in this frame.
  }
  else {
    // We found a face!
    // Reset the time since we saw a face to 0
    timeSinceFace = 0;
    // If the happy face has opacity 0, we need to animate it in
    // and animate out the sad face
    if ($('#happy').css('opacity') == 0) {
      $('#sad').animate({
        opacity: 0
      },ANIMATION_DURATION);
      $('#happy').animate({
        opacity: 1
      },ANIMATION_DURATION);
      // Speak a happy line
      responsiveVoice.speak(getRandomString(happyStrings),voice,voiceParameters);
    }
  }
}

// getRandomString (array)
//
// A helper function that just returns a random string from the provided
// array. This is a classic way to select a random element from an array.
function getRandomString(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
