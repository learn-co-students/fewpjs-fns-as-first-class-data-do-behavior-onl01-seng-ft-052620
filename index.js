/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
// time HH:MM

function greet(time) {
  let hour = parseInt(time.split(':')[0]) // gets the hour hh:mm
  if (hour < 12) {
    return "Good Morning"
  } else if (hour >= 12 && hour <= 17 ) {
    return "Good Afternoon"
  }
    else (hour > 17) 
      return "Good Evening"
};

/* Write your implementation of displayMessage() */
//When the function runs it should update the text inside the #greeting node with the content of the argument.

function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}