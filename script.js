document.getElementById("start-button").addEventListener("click", function() {
    window.location.href = "mult.html";
   });

function goToVideos() {
    window.location.href = "videos.html";
}

function playVideo(videoNumber) {
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
     videos[i].pause();
    }
    videos[videoNumber - 1].play();
}
