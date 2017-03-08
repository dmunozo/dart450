

/*
Assigment 02
Daniel Munoz Ortiz

SELVA
*/

$(document).ready(function() {

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
      triggerElement: "#branch_1",
      duration: 900
    });

scene.setTween("#branch_1", 0.5, {
    x: "10%",
  });

  scene.triggerHook(0.1);
  scene.addTo(controller);

  });

  
