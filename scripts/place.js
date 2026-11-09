
// Static weather values for Uyo, Akwa Ibom
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill using the Celsius formula
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Default wind chill value
let windChill = "N/A";

// Check whether wind chill calculation is possible
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

// Display weather information
document.querySelector("#temperature").textContent = temperature;

document.querySelector("#wind-speed").textContent = windSpeed;

document.querySelector("#wind-chill").textContent = windChill;

// Display current year
document.querySelector("#current-year").textContent =
    new Date().getFullYear();

// Display last modified date
document.querySelector("#last-modified").textContent =
    document.lastModified;
