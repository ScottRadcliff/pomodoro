// Set event handlers for the action links: start, pause, stop
document.querySelector("[data-attribute='start']").addEventListener('click', start);
document.querySelector("[data-attribute='pause']").addEventListener('click', pause);
document.querySelector("[data-attribute='stop']").addEventListener('click', stop);

var firstSecond = false;
var countdownInterval;
var timer = document.querySelector("[data-attribute='countdown']");

function start(event) {
  event.preventDefault();
  startCountdown();
}

function clear() {
  clearInterval(countdownInterval);
}

function resetTimer() {
  timer.innerHTML = "25:00";
  document.title = "25:00";
}

function stop(event) {
  event.preventDefault();
  resetTimer();
  clear();
} 

function startCountdown() {
  countdownInterval = setInterval(reduceTime, 1000);
}

function pause(event) {
  event.preventDefault();
  clear();
}


function reduceTime() {
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
      if (minutes == "0") {
        resetTimer();
        clear();
        alert('Take a break');
        return;
      } else {
        minutes = parseInt(minutes) - 1;
        seconds = "59";
      }
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
