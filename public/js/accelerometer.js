window.addEventListener('deviceorientation', deviceorientationHandler, false);

var xAxis = $('.x-axis');
var yAxis = $('.y-axis');

function deviceorientationHandler(eventData) {
  xAxis.height(xAxisPercent(eventData.beta));
  yAxis.width(yAxisPercent(eventData.gamma));
  $('.orient').css('transform', 'rotate(' + eventData.alpha + 'deg)');
}

var xAxisPercent = function(x){
  return percentize((x + 90) / 180);
};

var yAxisPercent = function(y){
  if(y > 90){
    y = 90;
  }else if(y < -90){
    y = -90;
  }

  return percentize((y + 90) / 180);
};

var percentize = function(dec){
  return Math.round((dec * 100)).toString() + "%";
};
