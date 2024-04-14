const hourElement = document.getElementById("Hour");
const minuteElement = document.getElementById("Minutes");
const secondElement = document.getElementById("Seconds");
const ampmElement = document.querySelector(".ampm");

function updateClock() {
          let now = new Date();
          let h = now.getHours();
          let m = now.getMinutes();
          let s = now.getSeconds();
          let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);