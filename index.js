/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(timeString) {
  const converted = parseInt(timeString.split(":")[0])
  if (converted < 12) {
   return `Good Morning`;
  }
  if (converted > 12 && converted < 17 ) {
    return `Good Afternoon`;
  }
  if (converted > 17 ) {
    return `Good Evening`;
  }
}

function displayMessage(message) {
  const input = document.getElementById('greeting');
  input.innerText = `${message}`
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
