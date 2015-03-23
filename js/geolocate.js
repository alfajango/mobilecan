if(! "geolocation" in navigator) {
  $('.locate').hide();
  $('.weather').append('Geolocation is not supported in your browser.')
}

$('.locate').click(function(){
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon;
    $.getJSON(url, function(data){
      var tempc = data.main.temp - 273.15; //kelvin to celsius
      var tempf = tempc * 1.8 + 32;
      var icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
      $('.tempc').text(Math.round(tempc));
      $('.tempf').text(Math.round(tempf));
      $('.humid').text(data.main.humidity + '%');
      $('.icon').attr('src', icon);
      $('.desc').append(data.weather[0].description);
      $('.city').text(data.name);
    });
  });
});