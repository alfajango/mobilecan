navigator.getUserMedia = ( navigator.getUserMedia ||
                   navigator.webkitGetUserMedia ||
                   navigator.mozGetUserMedia ||
                   navigator.msGetUserMedia);

if(typeof navigator.getUserMedia !== 'function'){
  $('.stream').hide();
  $('.stream-error').show();
}else{
  if (typeof MediaStreamTrack !== 'undefined' &&
      typeof MediaStreamTrack.getSources !== 'undefined') {
    var cameraIndex;
    var cameras = [];
    MediaStreamTrack.getSources(function(sources){
      for(var i = 0; i < sources.length; i++){
        if(sources[i].kind === 'video'){
          cameras.push(sources[i].id);
        }
      }
    cameraIndex = 1;
    });
  }
  var cameraOffEvent;

  var cameraOnEvent = function(){
    if(typeof cameraIndex === 'undefined'){
      var video = true;
    }else{
      var video = {
        optional: [{sourceId: cameras[cameraIndex]}]
      };
    }
    navigator.getUserMedia (
    { 
      video: video
    },
    // successCallback
    function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();

      if(cameras && cameras.length > 1){
        $('.cameraSwitch').show();
      }
      cameraOffEvent = function(){
        localMediaStream.stop();
        video.pause();
      }
      $('.cameraOff').click(cameraOffEvent);
    },
    // errorCallback
    function(err) {
      console.log("The following error occured: " + err);
    }
    );
  };

  $('.cameraOn').click(cameraOnEvent);

  var switchCameraEvent = function(){
    if(cameraIndex == cameras.length - 1){
      cameraIndex = 0;
    }else{
      cameraIndex++;
    }
    cameraOffEvent();
    cameraOnEvent();
  }

  $('.cameraSwitch').click(switchCameraEvent);
}