const currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const windSpeed = 14;
const temperature = 15;

function calculateWindchill(wind, temp) {
       return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 
           0.3965 * temp * Math.pow(wind, 0.16);
}

if (temperature <= 50 && windSpeed > 3) {

  const windChill = calculateWindchill(temperature, windSpeed);
  document.getElementById("windchill").innerHTML = Math.round(windChill) + "°C";
} else {

  document.getElementById("windchill").innerHTML = "N/A";
}
console("hello")