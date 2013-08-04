/*
	Module for Robo motion control
*/


var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  var leftFront, rightFront, leftBack, rightBack;
  /*
    Bi-Directional Motors can be initialized by:

      new five.Motor([ 3, 12 ]);

    ...is the same as...

      new five.Motor({
        pins: [ 3, 12 ]
      });

    ...is the same as...

      new five.Motor({
        pins: {
          pwm: 3,
          dir: 12
        }
      });

   */


  leftFront = new five.Motor({
    pins: {
      pwm: 11,
      dir: 12
    }
  });

  rightFront = new five.Motor({
    pins: {
      pwm: 9,
      dir: 8
    }
  });

  leftBack = new five.Motor({
    pins: {
      pwm: 6,
      dir: 7
    }
  });
  
  rightBack = new five.Motor({
    pins: {
      pwm: 3,
      dir: 2
    }
  });




  board.repl.inject({
    leftFront: leftFront,
    rightFront: rightFront,
    leftBack: leftBack,
    rightBack: rightBack
  });


  leftFront.on("start", function(err, timestamp) {
    console.log("leftFront start", timestamp);
  });

  rightFront.on("start", function(err, timestamp) {
    console.log("rightFront start", timestamp);
  });

  leftBack.on("start", function(err, timestamp) {
    console.log("leftBack start", timestamp);
  });

  rightBack.on("start", function(err, timestamp) {
    console.log("rightBack start", timestamp);
  });

  leftFront.on("stop", function(err, timestamp) {
    console.log("leftFront stop", timestamp);
  });

  rightFront.on("stop", function(err, timestamp) {
    console.log("rightFront stop", timestamp);
  });

  leftBack.on("stop", function(err, timestamp) {
    console.log("leftBack stop", timestamp);
  });

  rightBack.on("stop", function(err, timestamp) {
    console.log("rightBack stop", timestamp);
  });


  // set the motor going forward full speed
  leftFront.forward(255);
  rightFront.forward(255);
  leftBack.forward(255);
  rightBack.forward(255);

});


/* Moves the robo forward */
exports.forward = function(){
	console.log('moving forward');

}


/* Moves the robo backword */
exports.back = function(){
	console.log('moving back');
}


/* Turns the robo to left direction */
exports.turnLeft = function(){
	console.log('turning left');
}

/* Turns the robo towards right */
exports.turnRight = function(){
	console.log('turning right');
}

/* Stop the robo */
exports.stop = function(){
	console.log('stopping');
}





