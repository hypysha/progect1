var randomBtn = document.getElementById("random-btn");
var cartoonsBtn = document.getElementById("cartoons-btn");
var gameBtn = document.getElementById("game-btn");
var backBtn = document.getElementById("back-btn");

randomBtn.addEventListener("click", function() {
 window.location.href = "mult.html";
});

cartoonsBtn.addEventListener("click", function() {
 window.location.href = "videos.html";
});

gameBtn.addEventListener("click", function() {
 window.location.href = "game.html";
});

backBtn.addEventListener("click", function() {
 window.location.href = "index.html";
});