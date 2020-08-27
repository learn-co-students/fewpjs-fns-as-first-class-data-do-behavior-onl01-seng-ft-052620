/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let hour = parseInt(string.split(':')[0], [10]
  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour <= 17 ) {
    return "Good Afternoon"
  } else if (hour > 17) {
    return "Good Evening"
  } else {
    return string
  }

  }
  
/* Write your implementation of displayMessage() */
function displayMessage(greet(string)) {
  const string = document.getElementById('time').value

}