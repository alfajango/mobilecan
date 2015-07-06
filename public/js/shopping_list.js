var removeLink = '<a href="#" class="removeLink">x</a>'
var removeItem = function(){
  $(this).parents('tr').remove();
};


$('.addItem').submit(function(event){
  event.preventDefault();
  var item = $('#add').val();
  if(item.length){
    $('.listTable').append("<tr><td class=\"listItem\">" + item + "</td><td>" + removeLink + "</td></tr>");
  }
  $('.removeLink').click(removeItem);
});

$('.storeItems').submit(function(event){
  var items = Array();
  event.preventDefault();
  $('.listItem').each(function(){
    items.push($(this).text());
  })

  itemString = items.join(',');

  
});
