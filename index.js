/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(userTime) {
  let findTime = userTime.split(':');
  const convertedFindTime = parseInt(findTime[0]);
  if (convertedFindTime < 12){
    return 'Good Morning';
  } else if (12 < convertedFindTime && convertedFindTime < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = msg;
}