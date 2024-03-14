var video = document.getElementById("myVideo");

var menuBtn = document.getElementById("menuBtn");
var againBtn = document.getElementById("againBtn");

function playRandomVideo() {
  var videos = ["woody.mp4", "utki.mp4", "tm.mp4", "smesh.mp4", "sd.mp4", "sb.mp4", "robot.mp4", "pokemons.mp4"];

  var randomVideo = videos[Math.floor(Math.random() * videos.length)];

  video.src = "video/" + randomVideo;

  video.play();
}

playRandomVideo();

menuBtn.addEventListener("click", function() {
  window.location.href = "menu.html";
});

againBtn.addEventListener("click", function() {
  playRandomVideo();
});

  