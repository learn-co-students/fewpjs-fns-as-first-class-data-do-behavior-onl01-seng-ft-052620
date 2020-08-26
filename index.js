/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = (timeString) => {
 let hour = timeString.split(":")[0]
if (hour > 17){
  return "Good Evening"}
if (hour < 12){
  return"Good Morning"}
else {
  return "Good Afternoon"}
}
const displayMessage = (msg) => {
   document.getElementById("greeting").innerText = msg;
}
