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

  if (h >= 12) {
    ampm = "PM";
  }

  h = h % 12 || 12; // Convert to 12-hour format

  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;
}

function updateCity() {
  fetch("https://ipinfo.io/json?token=992fda8a94a6ce")
    .then(response => response.json())
    .then(data => {
      const city = data.city;
      const country = data.country; // Retrieve country from API response
      const location = `${city}, ${country}`; // Concatenate city and country
      cityElement.innerText = location;
    })
    .catch(error => {
      console.error('Error fetching city:', error);
      cityElement.innerText = 'unknown';
    });
}

function getLocation() {
  updateCity(); // No need to use geolocation, as ipinfo.io provides city information based on IP address
}

updateClock();
setInterval(updateClock, 1000);
getLocation();
