const now = new Date();
const newDate = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const date = document.getElementById('date').innerText = newDate;



const currentDate = new Date();    
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayDate = currentDate.getDay();
const currentDay = weekDays[todayDate];
document.getElementById('day').innerText =  currentDay;
