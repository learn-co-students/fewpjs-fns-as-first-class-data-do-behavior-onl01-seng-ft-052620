/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
  function greet(string) {
    let array = string.split(':'); //['12'], '30']
    string = parseInt(array[0]); // 12
    if (string < 12) {
      return "Good Morning"
    } else if (string >= 12 && string <= 17 ) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
  }
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greetingNode = document.querySelector('#greeting')
  greetingNode.innerText = string

}
