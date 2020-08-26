/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

 
function greet(string) {
  let numString = string.split(':')[0];
     numString = parseInt(numString)
    if (numString < 12 ) {
      return "Good Morning"
    }
    else if (numString >= 12 && numString < 17) {
      return "Good Afternoon"
    }
    else if (numString >= 17) {
      return "Good Evening"
    }
};

function displayMessage(string) {
  document.getElementById('greeting').innerText = string;
}
 
