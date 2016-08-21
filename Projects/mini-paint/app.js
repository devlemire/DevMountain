$(document).ready(function() {
  var $box = $('.box');
  var $reset = $('#reset');
  var color = 'white';
  var $red = $('#red');
  var $green = $('#green');
  var $blue = $('#blue');
  var $yellow = $('#yellow');
  var $white = $('#white');
  var colors = "red green blue yellow white";

  var mouseIsDown = false;

  $red.on('click', function() {
    color = 'red';
  });

  $green.on('click', function() {
    color = 'green';
  });

  $blue.on('click', function() {
    color = 'blue';
  });

  $yellow.on('click', function() {
    color = 'yellow';
  });

  $white.on('click', function() {
    color = 'white';
  });

  $box.on('click', function() {
    $(this).addClass(color);
  });

  $box.mouseup(function() {
    mouseIsDown = false;
  });

  $box.mousedown(function() {
    if( !(mouseIsDown) ) {
      mouseIsDown = true;
    }
    $box.mousemove(function() {
      if(mouseIsDown) {
        $(this).addClass(color);
      }
    });

  });

  // $box.mouseover(function() {
  //   $(this).addClass(color);
  // });

  $box.on('dblclick', function() {
    $(this).removeClass(color);
  });

  $reset.on('click', function() {
    $box.removeClass(colors);
  });
});
