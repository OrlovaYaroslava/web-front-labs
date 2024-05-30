function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds;
}
setInterval(showTime, 1000);
