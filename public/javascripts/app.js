document.querySelector("[data-attribute='start']").addEventListener('click', start);

var firstSecond = false;

function start(event) {
  event.preventDefault();
  startCountdown();
}


function startCountdown() {
  setInterval(reduceTime, 1000);
}


function reduceTime() {
  var timer = document.querySelector("[data-attribute='countdown']");
  if (timer.innerHTML == "25:00" &&  firstSecond === false) {
    firstSecond = true;
  } else if (timer.innerHTML == "25:00" && firstSecond === true) {
    timer.innerHTML = "24:59";
    firstSecond = false;
  } else {
    var time = timer.innerHTML;
    var hoursAndSeconds = timer.innerHTML.split(":");
    hoursAndSeconds[1] = parseInt(hoursAndSeconds[1]) - 1;
    timer.innerHTML = hoursAndSeconds[0] + ":" + hoursAndSeconds[1];
    document.title = hoursAndSeconds[0] + ":" + hoursAndSeconds[1];
  }
}
