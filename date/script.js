const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
const dayzz= document.querySelector('#day')
const hourzz= document.querySelector('#hour')
const minutezz= document.querySelector('#minute')
const seczz= document.querySelector('#sec')

   dayzz.addEventListener('change', function(){
    daysEl.innerText = parseInt(dayzz.value);
   })
  hourzz.addEventListener('change', function(){
    hoursEl.innerText = parseInt(hourzz.value);
  })
  minutezz.addEventListener('change', function(){
    minsEl.innerText = parseInt(minutezz.value);
})
   seczz.addEventListener('change', function(){
    secondsEl.innerText = parseInt(seczz.value);
   })
         
   let inIntervId;

   function startTimer() {
       if (!inIntervId) {
           inIntervId = setInterval(Timer, 1000)
       }
   }
    
    function startTimer() {

     totalseconds = ((parseInt(dayzz.value)*24*3600) + (parseInt(hourzz.value)*3600) + (parseInt(minutezz.value)*60) + (seczz.value))

     console.log(totalseconds);
     
     const days = Math.floor(totalSeconds / 3600 / 24);
     const hours = Math.floor(totalSeconds / 3600) % 24;
     const mins = Math.floor(totalSeconds / 60) % 60;
     const seconds = Math.floor(totalSeconds) % 60;

     

     totalseconds --;

     

    daysEl.innerText = days 
    hoursEl.innerText = hours 
    minsEl.innerText = mins 
    secondsEl.innerText = seconds
    }

    function stopTimer() {
        clearInterval(inIntervId)
        inIntervId = null;
        daysEl.innerText = 0;
        hoursEl.innerText = 0;
        minsEl.innerText = 0;
        secondsEl.innerText = 0;
    }
    
    startButton.addEventListener('click', startTimer);
    
    resetButton.addEventListener('click', stopTimer);










