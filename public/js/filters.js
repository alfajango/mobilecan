var body = $('body');

$('#bodyEditor button').click(function(event){
  event.preventDefault();
  $(this).toggleClass('on');
});

$('#toggleInvert').click(function(){
  body.toggleClass('invert');
  setBodyLevels();
});

$('.toggleGrayscale').click(function(){
  body.toggleClass('grayscale');
  setBodyLevels();
});

var setBlur = $('#setBlur');
var setOpacity = $('#setOpacity');

var setBodyLevels = function(){
  var blur = setBlur.val();
  var opacity = setOpacity.val();
  var filters = 'blur(' + blur + 'px) opacity(' + opacity + '%)';

  if(body.hasClass('invert')){
    filters += ' invert(1)';
  }

  if(body.hasClass('grayscale')){
    filters += ' grayscale(1)';
  }

  body.css('filter', filters);
  body.css('-webkit-filter', filters);
};

setBlur.change(setBodyLevels);
setOpacity.change(setBodyLevels);

$('#bodyEditor').on('reset', function (){
  setTimeout(function() {
    body.removeClass('invert grayscale')
    $('#bodyEditor button').removeClass('on');
    setBodyLevels();
  }, 0);
});

var sampleImg = $('.sample-img');

$('#imageEditor button').click(function(event){
  event.preventDefault();
  $(this).toggleClass('on');
});

$('.toggleImageGrayscale').click(function(){
  sampleImg.toggleClass('grayscale');
  setImageLevels();
});

$('.toggleSepia').click(function(){
  sampleImg.toggleClass('sepia');
  setImageLevels();
});

$('.toggleShadow').click(function(){
  sampleImg.toggleClass('shadow');
  setImageLevels();
})

var setBrightness = $('#setBrightness');
var setContrast = $('#setContrast');

var setImageLevels = function(){
  var brightness = setBrightness.val();
  var contrast = setContrast.val();
  var filters = 'brightness(' + brightness + '%) contrast(' + contrast + '%)';

  if(sampleImg.hasClass('sepia')){
    filters += ' sepia(1)';
  }

  if(sampleImg.hasClass('grayscale')){
    filters += ' grayscale(1)';
  }

  if(sampleImg.hasClass('shadow')){
    filters += ' drop-shadow(12px 12px 8px #000)'
  }

  sampleImg.css('filter', filters);
  sampleImg.css('-webkit-filter', filters);
};

setBrightness.change(setImageLevels);

setContrast.change(setImageLevels);

$('#imageEditor').on('reset', function (){
  setTimeout(function() {
    sampleImg.removeClass('sepia grayscale shadow');
    $('#imageEditor button').removeClass('on');
    setImageLevels();
  }, 0);
});
