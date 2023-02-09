const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

// date.setMonth(5);     // uncomment to test month and last days change

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate() // Gets last day of current month

const prevLastDay = new Date(date.getFullYear(),date.getMonth() ,0).getDate() // Gets last day of previous month

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();


function getLastDay(x)
{
    if (x == 7) {
        return 8
    }
    else{ 
    return (x - 7)
    }     
}

const nextDays = 6 - getLastDay(lastDayIndex);



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".date h1").innerHTML 
= months[date.getMonth()];

document.querySelector(".date p").innerHTML 
= new Date().toDateString(); 

let days = "";


// loop for previous days
for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}


// previous dates
for(let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth()
    === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`; 
    }
    else {
    days += `<div>${i}</div>`; 
    }
} 


// post dates
for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}

}


document.querySelector(".leftArrow").addEventListener('click',()=> {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})
document.querySelector(".rightArrow").addEventListener('click',()=> {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();