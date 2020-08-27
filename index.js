/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time){
  const hour = parseInt(time.split(":")[0]);
  if (hour < 12) {
    return "Good Morning";
  }
  else if (hour > 12 && hour < 17){
    return "Good Afternoon"
  }
  else return "Good Evening"
}

function displayMessage(message){
  const greeting = document.querySelector('h1#greeting');
  greeting.innerText = message;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
