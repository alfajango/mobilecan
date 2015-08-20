var vectorScale = $('#vector-scale');
var vectorImg = $('.vectorImg');

vectorScale.change(function(){
  vectorImg.css('transform', 'scale(' + $(this).val() + ')');
});
