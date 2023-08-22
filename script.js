var timer = 60;
var score = 0;
var hitrn = 0;
function makebubble() {
  var clutter = "";
  for (let i = 1; i < 176; i++) {
    var num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
  var timeeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeeint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over Your Score : ${score}</h1>
      <style>
      #pbtm{
        color:#424874;
      }</style>`;
    }
  }, 1000);
}
function increasescore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}
function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clknum = Number(dets.target.textContent);
    if (clknum===hitrn) {
        increasescore();
        makebubble();
        getnewhit();
    }
})
runtimer();
makebubble();
getnewhit();
