

const timedisplay = document.querySelector("#timedisplay");
const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

start.addEventListener("click", ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(upadateTime,1000);
    }
});
pause.addEventListener("click", ()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);

    }
});

reset.addEventListener("click", ()=>{
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs= 0;
    mins= 0;
    secs= 0;
    timedisplay.textContent = "00:00:00"
});


function upadateTime(){
    elapsedTime = Date.now() - startTime;

    hrs =  Math.floor(elapsedTime / (1000*60*60) % 60);
    mins = Math.floor((elapsedTime / (1000*60)) % 60);
    secs = Math.floor((elapsedTime / 1000) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timedisplay.innerHTML = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return (("0")+ unit).length > 2 ? unit : "0" + unit ;
    }
}