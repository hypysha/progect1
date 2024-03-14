const videos = [
    "video/alladin.mp4",
    "video/Arnold.mp4",
    "video/bitl.mp4",
    "video/chd.mp4",
    "video/chp.mp4",
    "video/chudesa.mp4",
    "video/cotopes.mp4",
    "video/fish.mp4",
    "video/kb.mp4",
    "video/kim.mp4",
    "video/loloandstitch.mp4",
    "video/monstrs.mp4",
    "video/peppa.mp4",
    "video/pf.mp4",
    "video/pokemons.mp4"
];
  
  function playRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const videoSrc = videos[randomIndex];
    const videoFrame = document.getElementById("video-frame");
    videoFrame.setAttribute("src", videoSrc);
  }

  function goToVideos() {
    window.location.href = "videos.html";
}
function goToIndex() {
    location.href = "index.html";
  }