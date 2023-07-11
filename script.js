const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondDegree = 6*seconds + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const minutes = now.getMinutes();
    const minuteDegree = 6*minutes + seconds/10 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = 30*hours + minutes/2 + seconds/120 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    const audio = document.getElementById("ticktock");
    // if(!audio){console.log("audio not found");}
    audio.currentTime = 0;
    audio.play();
}
setInterval(setDate, 1000);
setDate();