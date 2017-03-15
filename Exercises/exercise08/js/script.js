/*
Daniel Munoz
*/


// How often to check the current volume
var interval = 10;

// An audiocontext is used to work with audio
var audioContext;

// We will create an audio meter and put it in here
var meter;

// A place to store the output stream of the microphone
var microphone;



$(document).ready(function() {

    //Select each character!!
  $('#content').blast({
    delimiter: 'character'
  });

    navigator.getUserMedia({audio: true}, handleAudio, audioError);

  setInterval(update,interval);
});


// Called when we have access to the microphone's audio stream
function handleAudio (stream) {
  // Create our AudioContext for working with audio...
  audioContext = new AudioContext();

  // Store the audio stream from the microphone in our microphone variable
  microphone = audioContext.createMediaStreamSource(stream);

  // Create an audio meter for checking the volume
  meter = createAudioMeter(audioContext);

  // Connect the meter and the microphone so the meter has access
  // the microphone stream
  microphone.connect(meter);
}

function audioError(e) {
  $('#volume').css({
    'background-color': 'red'
  })
}


function update () {
  // Check the meter is working...
  if (meter) {
    // If so, then for each element with class "blast" (e.g. each
    // span around each character...)
    $('.blast').each(function (index) {
      // Call the soundWave function with the parameters of:
      // * the element itself
      // * the index of the element (a unique number)
      // * the current volume of the meter
      soundWave($(this), index, meter.volume);
    });
  }
}

// soundWave (element, index, volume)
//
// Sets the font size of 'element' based on the 'volume' after
// a delay based on 'index'
function soundWave (element, index, volume) {
  // Set a timeout based on the index of this element
  setTimeout(function () {
    // Handle colours

    if (volume > 0.1) {
      element.css({
        color:'rgb('+ '255' + ',' + '80' + ',' + getRandomNumber() + ')'
      })
    }
    else {
      element.css({
        color:'#4e5560'
      })
    }
    // Size
    if (volume > 0.1) {
      $("#b1").animate({
                    marginTop: "-100%"
      },1100,'swing',function () {
          $("#b1").css({
            marginTop: "100%"
          });
      });

      $("#b2").animate({
                    marginTop: "-100%"
      },900,'swing',function () {
          $("#b2").css({
            marginTop: "100%"
          });
        });

      $("#b3").animate({
                    marginTop: "-100%"
      },1600,'swing',function () {
          $("#b3").css({
            marginTop: "100%"
          });
        });

      $("#b4").animate({
                    marginTop: "-100%"
      },800,'swing',function () {
          $("#b4").css({
            marginTop: "100%"
          });
        });

      $("#b5").animate({
                    marginTop: "-100%"
      },3000,'swing',function () {
          $("#b5").css({
            marginTop: "100%"
          });
        });
      $("#b6").animate({
                    marginTop: "-100%"
      },1000,'swing',function () {
          $("#b5").css({
            marginTop: "100%"
          });
        });
    }


    // Amplify the volume a bit (since it tends to be really low)
    volume = volume * 10;
    // Restrict the number so it can't go below 1.2, our normal em size for the page
    volume = Math.max(1,volume);
    // Restrict the number so it can go above 3, an arbitrary limit
    volume = Math.min(4, volume);
    // Set the element's CSS according to the volume
    // We'll just scale its Y so that we get a clean effect...

    element.css({
      transform: 'scaleY(' + volume + ')',
    });

  },index*10);
  // We delay by index * 10, e.g. 10 ms between each character changing size
  // from the start of the text to the end...
}

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 255);
  return randomNumber;
}
