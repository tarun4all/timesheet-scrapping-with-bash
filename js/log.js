document.querySelector("#task").value = "asdf"

document.querySelector("#project").selectedIndex = 12

var date = new Date();
var currentDate = date.toISOString().slice(0,10);
document.querySelector("#date").value = currentDate

document.querySelector("#hoursActual").value = "8"

// document.querySelector("button").click();