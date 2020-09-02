/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(time) {
  const time_split = time.split(":");
  const time_parse = parseInt(time_split, 10);

  if (time_parse < 12 ) {
    return 'Good Morning' ;
  } else if (time_parse >= 12 && time_parse < 17) {
    return 'Good Afternoon';    
  } else {
    return 'Good Evening'
  }
};


function displayMessage(string) {
  document.getElementById('greeting').innerText = string
}



/* Write your implementation of displayMessage() */

