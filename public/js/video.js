$('.video_form').submit(function(){
  showLoading();
});

$('#video').change(function(){
  $('.video_submit').prop('disabled', false);
  var fullPath = $(this).val();
  var filename = fullPath.replace(/^.*[\\\/]/, '')
  $('.filename').text(filename);
});
