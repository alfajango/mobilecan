  navigator.getUserMedia = ( navigator.getUserMedia ||
                     navigator.webkitGetUserMedia ||
                     navigator.mozGetUserMedia ||
                     navigator.msGetUserMedia);

  $('.cameraOn').click(function(){
    if (navigator.getUserMedia) {
       navigator.getUserMedia ({ video: true },
          // successCallback
          function(localMediaStream) {
             var video = document.querySelector('video');
             video.src = window.URL.createObjectURL(localMediaStream);
             video.play();

            $('.cameraOff').click(function(){
              localMediaStream.stop();
              video.pause();
            });
          },

          // errorCallback
          function(err) {
             console.log("The following error occured: " + err);
          }
       );
    } else {
       console.log("getUserMedia not supported");
    }
  });