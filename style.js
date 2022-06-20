const clock = document.querySelector('.clock');
const day = document.querySelector('.day');


function clocks() {
    const newClock = new Date();
    clock.innerHTML = newClock.toLocaleTimeString();
    day.innerHTML = newClock.toDateString();

}


setInterval(clocks, 1000)