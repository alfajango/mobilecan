navigator.getBattery().then(function(battery) {

  var showCharging = function(){
    $('.charging').text("Battery charging? " + (battery.charging ? "Yes" : "No"));
  };

  var showLevel = function(){
    $('.level').text("Battery level: " + battery.level * 100 + "%");
  };

  showCharging();
  showLevel();

  battery.addEventListener('chargingchange', showCharging);

  battery.addEventListener('levelchange', showLevel);
});
