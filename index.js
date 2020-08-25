/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  const hourMin = str.split(":").map(function(time){
    return parseInt(time,10);
  });
  if (hourMin[0] < 12){
    return "Good Morning";
  } else if ((hourMin[0] >= 17 && hourMin[1] > 0) || hourMin[0] > 17 ) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}
