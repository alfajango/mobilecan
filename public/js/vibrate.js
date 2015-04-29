if(typeof navigator.vibrate === 'function'){
  $('.vibrate').click(function(){
    navigator.vibrate(500);
  });
}else{
  $('.vibrate').hide();
  $('.vibrate-error').show();
}

