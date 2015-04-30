$('.videoForm').submit(function(){
  showLoading();
});

$('.videoInput').change(function(){
  $('.videoSubmit').prop('disabled', false)
});
