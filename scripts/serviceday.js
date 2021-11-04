const ONE_DAY = 60 * 60 * 24 * 1000;

document.addEventListener("DOMContentLoaded", function () {
  let now = new Date();
  const json = JSON.parse(document.getElementById("game_dates").textContent);

  for (const i in json) {
    const data = json[i];
    setDays(data.id, data.release, now);
  }
});

function setDays(id, start, end) {
  let days = getServiceDays(start, end);
  document.getElementById(id).textContent = `${days}일`;
}

function getServiceDays(start, end) {
  return parseInt((end - start) / ONE_DAY);
}
