const temperature = 30;
const windSpeed = 5;
document.querySelector("#temp").textContent = temperature;
document.querySelector("#wind").textContent = windSpeed;

function calculateWindChill(temp, speed) {
  return 35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
}

let windChill = "N/A"

if (temperature <= 50 && windSpeed > 3) {
    windChill = `${Math.round(calculateWindChill(temperature, windSpeed))} °F`
}

document.querySelector("#windchill").textContent = windChill;