(function () {
  var uploadVideo = document.querySelector("#upload-video"),
    video = document.querySelector("video");

  if (uploadVideo && video) {
    // Set events
    uploadVideo.onchange = function (event) {
      // Get a reference to the taken picture or chosen file
      var files = event.target.files,
        file;
      if (files && files.length > 0) {
        file = files[0];
        try {
          // Create ObjectURL
          var videoURL = URL.createObjectURL(URL.createObjectURL(file));
          console.log(videoURL);

          // Set img src to ObjectURL
          video.src = videoURL;
          video.style.display = "block";

          // Revoke ObjectURL
          URL.revokeObjectURL(videoURL);
        }
        catch (e) {
          try {
            // Fallback if createObjectURL is not supported
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
              video.src = event.target.result;
              video.style.display = "block";
            };
            fileReader.readAsDataURL(file);
          }
          catch (e) {
            // Display error message
            var error = document.querySelector("#error");
            if (error) {
              error.innerHTML = "Neither createObjectURL or FileReader are supported";
            }
          }
        }
      }
    };
  }
})();
