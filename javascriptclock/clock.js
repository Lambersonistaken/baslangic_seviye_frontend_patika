

const nameArea = document.getElementById("myName");
const clock = document.querySelector('.clock');
let name_ = prompt("What is your name?");
nameArea.textContent = name_;


var d = new Date();
const dayOfWeekName = d.toLocaleString(
    'default', {weekday: 'long'}
  );
var n = d.toLocaleTimeString();
var s = d.toLocaleDateString();

function showTime() {
    clock.textContent = `${n} ${dayOfWeekName}`;
}

clock.addEventListener("onload", showTime());
