/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let currentHour = time.split(':')[0];
  currentHour= parseInt(currentHour)
  console.log(currentHour)
  if (currentHour < 12) {
    return "Good Morning"
  }
  else if ( 12 <= currentHour && currentHour < 17 ) {
    return "Good Afternoon"
  }
  else if ( 17<= currentHour) {
    return "Good Evening"
  }
};
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}