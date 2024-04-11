// Get viewport width and height
let viewportW = window.innerWidth;
let viewportH = window.innerHeight;

// try changing "mousemove" to "click"
document.addEventListener("mousemove", update, false);
document.addEventListener("scroll", update, false);

function update(e) {
  let mouseY = e.clientY;
  let scrollY = window.scrollY;
  let text = "";
  
  let scrollPercentage = (scrollY / (document.documentElement.scrollHeight - viewportH)) * 100;


  if (mouseX < viewportH / 2) {
    text = "goodbye";
  }
  else {
    text = "hello";
  }

// output to html elem
 document.getElementById("t").innerText = text;
 document.getElementById("x").innerText = mouseX;
 document.getElementById("y").innerText = mouseY;