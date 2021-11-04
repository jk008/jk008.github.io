const oneDay = 60 * 60 * 24 * 1000;

document.addEventListener("DOMContentLoaded", function () {
  let now = new Date();
  setDays("days_daifugo", new Date(2021, 7, 30), now);
});

function setDays(id, start, end) {
  let days = getServiceDays(start, end);
  document.getElementById(id).textContent = `${days}일`;
}

function getServiceDays(start, end) {
  return parseInt((end - start) / oneDay);
}
