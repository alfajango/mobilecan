var sampleImg = $('.sample-img');
$('.toggleGrayscale').click(function(){
  sampleImg.toggleClass('grayscale');
  setLevels();  
});

$('.toggleSepia').click(function(){
  sampleImg.toggleClass('sepia');
  setLevels();  
});

$('.toggleInvert').click(function(){
  sampleImg.toggleClass('invert');
  setLevels();  
});

var setBrightness = $('#setBrightness');
var setContrast = $('#setContrast');

var setLevels = function(){
  var brightness = setBrightness.val();
  var contrast = setContrast.val();
  var filters = 'brightness(' + brightness + '%) contrast(' + contrast + '%)';

  if(sampleImg.hasClass('sepia')){
    filters += ' sepia(1)';
  }

  if(sampleImg.hasClass('grayscale')){
    filters += ' grayscale(1)';
  }

  if(sampleImg.hasClass('invert')){
    filters += ' invert(1)';
  }

  sampleImg.css('filter', filters);
  sampleImg.css('-webkit-filter', filters);
};

setBrightness.change(setLevels);

setContrast.change(setLevels);

$('#imageEditor').on('reset', function (){
  setTimeout(function() {
    sampleImg.removeClass('invert sepia grayscale')
    setLevels();
  }, 0);
});