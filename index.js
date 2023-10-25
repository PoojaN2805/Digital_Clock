let currentTime;

function updateClock() {
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    setInterval(() => {
        currentTime = new Date();

        hrs.innerHTML = (currentTime.getHours()<10?'0':'')+ currentTime.getHours();
        min.innerHTML = (currentTime.getMinutes()<10?'0':'')+ currentTime.getMinutes();
        sec.innerHTML = (currentTime.getSeconds()<10?'0':'')+ currentTime.getSeconds();
    }, 1000);
}

function updateDateTime() {
    const now = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = daysOfWeek[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];

    document.getElementById("day").textContent = `${day}`;
    document.getElementById("date").textContent = `${date}`;
    document.getElementById("month").textContent = `${month}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

window.onload = function () {
    updateClock();
};
