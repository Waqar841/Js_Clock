let clock_value = document.getElementById("clock");
let image = document.getElementById("lolcatImage");
let partyTimeButton = document.getElementById("partyTimeButton");
let timeEvent = document.getElementById("timeEvent");
let wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
let lunchTimeSelector = document.getElementById("lunchTimeSelector");
let napTimeSelector = document.getElementById("napTimeSelector");

let dateTime = new Date();
let minutess;
let hours;
let seconds;
let Median = "PM";
let wakeUptime;
let lunchTime;
let naptime;

// Setting AM and PM of the clock
let setMedian = () => {
  let current_Hour = dateTime.getHours();
  current_Hour >= 12 && current_Hour !== 24 ? (Median = "PM") : (Median = "AM");
  console.log("Hour " + current_Hour);
  console.log("Median " + Median);
};
// calling median
setMedian();

// update clock method
let changeTime = () => {
  dateTime = new Date();
  minutess = dateTime.getMinutes();
  hours = dateTime.getHours();
  seconds = dateTime.getSeconds();
  minutess = minutess < 10 ? "0" + minutess : minutess;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hours = hours < 10 ? "0" + hours : hours;
  clock_value.innerHTML = hours + ":" + minutess + ":" + seconds + " " + Median;
};

changeTime();

let set_timeEvent = ()=> {
  if (wakeUptime > 6 && wakeUptime < 12) console.log("WakeUp-Time");
};

wakeUpTimeSelector.addEventListener("change", () => {
  wakeUptime = wakeUpTimeSelector.value;
  set_timeEvent();
});

lunchTimeSelector.addEventListener("change", () => {
  lunchTime = lunchTimeSelector.value;
  set_timeEvent();
});

napTimeSelector.addEventListener("change", () => {
  napTime = napTimeSelector.value;
  set_timeEvent();
});

// party time
partyTimeButton.addEventListener("click", () => {
  image.src = "/images/party.JPG";
  timeEvent.innerText = "Party time";
});

let partyEvent = () => {};

// this will be updating clock every second
let interval_Id = setInterval(changeTime, 1000);
