/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(string) {
  let currentTime = string.split(':')[0];
  currentTime = parseInt(currentTime)
  console.log(currentTime)
  if (currentTime < 12) {
  return "Good Morning"
  }
  else if (12 <= currentTime && currentTime < 17) {
    return "Good Afternoon"
  }
  else if (currentTime >= 17) {
    return "Good Evening"
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message
}
