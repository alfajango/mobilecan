window.addEventListener('deviceorientation', deviceorientationHandler, false);

var xAxis = $('.x-axis');
var yAxis = $('.y-axis');

// var gn = new GyroNorm();

//     gn.init().then(function(){
//         gn.start(function(data){
//           xAxis.height(Math.round(data.do.gamma));
//           yAxis.val(Math.round(data.do.beta));
//           $('#orientation').val(Math.round(eventData.alpha));
//         });
//     }).catch(function(e){
//       // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
//     });
function deviceorientationHandler(eventData) {
  xAxis.height(xAxisPercent(eventData.beta));
  yAxis.width(yAxisPercent(eventData.gamma));
  $('.orient').css('transform', 'rotate(' + eventData.alpha + 'deg)');
  $('#x').text('hai');
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

console.log(xAxisPercent(0));
