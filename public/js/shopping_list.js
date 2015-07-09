var removeLink = '<a href="#" class="removeLink">x</a>'
var removeItem = function(event){
  event.preventDefault();
  $(this).parents('tr').remove();
  storeItems();
};

var addItem = function(item){
  $('.listTable').append("<tr><td class=\"listItem\">" + item + "</td><td>" + removeLink + "</td></tr>");
  $('.removeLink').click(removeItem);
  storeItems();
}

var storeItems = function(){
  var items = Array();
  $('.listItem').each(function(){
    items.push($(this).text());
  })

  var itemString = items.join(',');
  localStorage.removeItem('list');
  localStorage.setItem('list', itemString);
};

var items = localStorage.getItem('list');
if(items){
  items.split(',').forEach(function(item){
    addItem(item);
  })
}

$('.addItem').submit(function(event){
  event.preventDefault();
  var item = $('#add').val();
  if(item.length){
    addItem(item);
  }
});
