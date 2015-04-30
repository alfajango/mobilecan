var showLoading = function(){
  $('body').append('<div class=\'spinner-wrap\'><div class=\'sk-spinner sk-spinner-wave\'><div class=\'sk-rect1\'></div><div class=\'sk-rect2\'></div><div class=\'sk-rect3\'></div><div class=\'sk-rect4\'></div><div class=\'sk-rect5\'></div></div></div></div>');
}

var hideLoading = function(){
  $('.spinner-wrap').hide();
}

$('.videoForm').submit(function(){
  showLoading();
})
