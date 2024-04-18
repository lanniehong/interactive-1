
function updateTime() {
  // your clock code (above) goes in here
  let d = new Date();

  // Date object methods - storing values as variables
  // https://www.w3schools.com/js/js_date_methods.asp
  let year = d.getFullYear();     // year as a four digit number (yyyy)
  let month = d.getMonth() + 1;   // month as a number (0-11), so + 1
  let date = d.getDate();         // day as a number (1-31)
  let hour = d.getHours();        // hour (0-23)
  let min = d.getMinutes();       // minute (0-59)
  let sec = d.getSeconds();       // second (0-59)

  // concatenate all the values for checking and print
  let now = year + "/" + month + "/" + date + ", " + hour + ":" + min + ":" + sec;
  console.log (now);

  // update the hand
  document.querySelector(".second").style.transform = "rotate(" + sec * 6 + "deg)"; 
  document.querySelector(".minute").style.transform = "rotate(" + min * 6 + "deg)";
  document.querySelector(".hour").style.transform = "rotate(" + hour * 6 + "deg)";
}

// run the above function every second
setInterval(updateTime, 1000);