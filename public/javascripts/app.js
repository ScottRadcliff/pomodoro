document.querySelector("[data-attribute='start']").addEventListener('click', start);
document.querySelector("[data-attribute='pause']").addEventListener('click', pause);

var firstSecond = false;
var countdownInterval;

function start(event) {
  event.preventDefault();
  startCountdown();
}


function startCountdown() {
  countdownInterval = setInterval(reduceTime, 1000);
}


function pause(event) {
  event.preventDefault();
  clearInterval(countdownInterval);
}


function reduceTime() {
  var timer = document.querySelector("[data-attribute='countdown']");

  if (timer.innerHTML == "25:00" &&  firstSecond === false) {
    firstSecond = true;
  } else if (timer.innerHTML == "25:00" && firstSecond === true) {
    timer.innerHTML = "24:59";
    firstSecond = false;
  } else {
    var minutesAndSeconds = timer.innerHTML.split(":");
    var minutes = minutesAndSeconds[0];
    var seconds = minutesAndSeconds[1];

    if (seconds == "00") {
      minutes = parseInt(minutes) - 1;
      seconds = "59";
    } else {
      seconds = parseInt(seconds) - 1;
    }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      timer.innerHTML = minutes + ":" + seconds;
      document.title = minutes + ":" + seconds;
  }
}
