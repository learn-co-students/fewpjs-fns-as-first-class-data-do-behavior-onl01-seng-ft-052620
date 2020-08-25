/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  let hour = parseInt(string.split(':')[0])
  if (hour < 12){
    return "Good Morning"
  } else if (11 < hour && hour <= 16){
    return "Good Afternoon"
  } else {
    return "Good Evening"

  }

};

function displayMessage(string){
  document.getElementById('greeting').innerText = string

};


