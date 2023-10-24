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

function updateDate(){
    let day=document.getElementById("day");
    let date= document.getElementById("date");
    let month=document.getElementById("month");
}

window.onload = function () {
    updateClock();
    updateDate();
};