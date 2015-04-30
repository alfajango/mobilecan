if(! "geolocation" in navigator) {
  $('.locate').hide();
  $('.geowrap').append('Geolocation is not supported in your browser.')
}

$('.locate').click(function(){
  showLoading();
  navigator.geolocation.getCurrentPosition(
  // Success handler
  function(position) {
    hideLoading();
    $('.error').hide();
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var latlon = lat + ',' + lon;
    var url = 'https://maps.googleapis.com/maps/api/staticmap?center=' + latlon +
    '&zoom=13&size=400x300&markers=color:red%7C' + latlon;
    $('.coords').text(lat + ', ' + lon);
    $('.geoMap').attr('src', url);
    $('.geolocate').show();
  }, 
  // Error handler
  function(error){
    hideLoading();
    if(error.code === 1){
      $('.error').text('Access not granted. Please check your browser permissions.').show();
    }else{
      $('.error').text('Geolocation is not available').show();
    }
  },
  {
    enableHighAccuracy: true,
    timeout: 15000
  }
  );
});
