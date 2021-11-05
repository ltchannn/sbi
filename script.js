const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

const newYears = "5 Nov 2021 18:00:00";

startButton.addEventListener("click",()=>{
    var x = setInterval(function() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        console.log(newYearsDate )
        console.log(totalSeconds)
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML = mins;
        secondsEl.innerHTML = seconds;
    
        if(totalSeconds <= 0){
            clearInterval(x)
            daysEl.innerHTML = 0;
            hoursEl.innerHTML = 0;
            minsEl.innerHTML = 0;
            secondsEl.innerHTML = 0;
            document.getElementById("dllm").innerHTML= ("u r ")
        }    
    },1000) 
})

resetButton.addEventListener("click",()=>{
    clearInterval(x)
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minsEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    
})










