window.addEventListener('devicemotion', deviceMotionHandler, false);

function deviceMotionHandler(eventData){
  var x = eventData.accelerationIncludingGravity.x;
  var y = eventData.accelerationIncludingGravity.y;
  var z = eventData.accelerationIncludingGravity.z;
  var total = (x*x + y*y + z*z);
  if (total > 1000)
    $('.shaken').text('Shaken, not stirred.');
}

window.addEventListener('deviceorientation', deviceorientationHandler, false);

var xAxis = $('#x-axis');
var yAxis = $('#y-axis');

function deviceorientationHandler(eventData) {
  xAxis.val(Math.round(eventData.gamma));
  yAxis.val(Math.round(eventData.beta));
  $('#orientation').val(Math.round(eventData.alpha));
};
