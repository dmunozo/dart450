

/*
Daniel Munoz Ortiz

Why this piece of Javascript which controls the easing of the movement
of the elements in the page and also controls the looping at the end
MUST be in the html in order to work?

If you delete it from here the program will still run...however if you
delete the code from the html it will not run even if is written in here!
*/


skrollr.init({
  easing: {
    sin: function(p) {
      return (Math.sin(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
    },
    cos: function(p) {
      return (Math.cos(p * Math.PI * 2 - Math.PI/2) + 1) / 2;
    },
  },
  render: function(data) {
    //Loop
    if(data.curTop === data.maxTop) {
      this.setScrollTop(0, true);
    }
  }
});
