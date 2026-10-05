const TIME_ZONE = 'Europe/Helsinki';

function updateClock() {
  const timeString = new Date().toLocaleTimeString('en-GB', {
    timeZone: TIME_ZONE,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById('clock').textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();
