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
  let color = "";
  let bgcolor = "";
  

  if (mouseY < viewportH / 2) {
    text = "hello";
    color = "#E08980";
    bgcolor = "#E6BBB4";
  }
  
  else {
    text = "goodbye";
    color = "#426275";
    bgcolor = "#36434B";
  }

// output to html elem
  document.getElementById("t").innerText = text;
  document.getElementById("t").style.color = color;
  document.getElementsByTagName("body")[0].style.backgroundColor = bgcolor;

}