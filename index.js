setInterval(() => {
  const d = new Date();
  const hour_time = d.getHours();
  const minutes_time = d.getMinutes();
  const seconds_time = d.getSeconds();
  const hourRotation = 30 * hour_time + minutes_time / 2;
  const minutesRotation = 6 * minutes_time;
  const secondsRotation = 6 * seconds_time;

  document.getElementById(
    "hour"
  ).style.transform = `rotate(${hourRotation}deg)`;
  document.getElementById(
    "minute"
  ).style.transform = `rotate(${minutesRotation}deg)`;
  document.getElementById(
    "second"
  ).style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);
