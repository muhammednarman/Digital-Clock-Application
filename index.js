let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let clock = setInterval(function time() {
  let global_date = new Date();
  let hr = global_date.getHours();
  let min = global_date.getMinutes();
  let sec = global_date.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
}, 1000);
