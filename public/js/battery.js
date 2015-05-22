if(typeof navigator.getBattery === 'function'){
  navigator.getBattery().then(function(battery) {
    var levelBar = $('.level');
    var level = battery.level * 100;
    var levelText = $('.level-text');

    var showCharging = function(){
      if(battery.charging){
        levelBar.addClass('charging');
      }else{
        levelBar.removeClass('charging');
      }
    };

    var showLevel = function(){
      if(level > 30){
        var background = 'green';
      }else if(level > 15){
        var background = 'yellow'
      }else{
        var background = 'red';
      }
      levelBar.css('background-color', background);
      levelBar.css('width', level + '%');
      levelText.text(level + '%');
    };

    showCharging();
    showLevel();

    battery.addEventListener('chargingchange', showCharging);

    battery.addEventListener('levelchange', showLevel);
  });
}else{
  $('.battery-error').show();
  $('.level').css('width', '100%');
}
