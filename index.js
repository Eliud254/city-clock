const hourElement = document.getElementById("Hour");
const minuteElement = document.getElementById("Minutes");
const secondElement = document.getElementById("Seconds");
const ampmElement = document.querySelector(".ampm");
const cityElement = document.getElementById("city");

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

function updateCity(latitude, longitude) {
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b115e3ac03c14d1caab1365e2f751b51`)
    .then(response => response.json())
    .then(data => {
      const city = data.results[0].components.city;
      cityElement.innerText = city;
    })
    .catch(error => {
      console.error('Error fetching city:', error);
      cityElement.innerText = 'Nairobi';
    });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      updateCity(latitude, longitude);
    }, error => {
      console.error('Error getting location:', error);
      cityElement.innerText = 'Nairobi';
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
    cityElement.innerText = 'Nairobi';
  }
}

updateClock();
setInterval(updateClock, 1000);
getLocation();
