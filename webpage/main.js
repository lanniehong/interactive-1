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

    if (mouseY < viewportH / 4) {
    text = "what is it?";
    color = "white";
    bgcolor = "white";
  }
  
  else {
    text = "list poetry?";
    color = "black";
    bgcolor = "black";
  }

    if (mouseY < viewportH / 4) {
    text = "what is it?";
    color = "white";
    bgcolor = "white";
  }
  
  else {
    text = "flags?";
    color = "black";
    bgcolor = "black";
  }


// output to html elem
  document.getElementById("t").innerText = text;
  document.getElementById("t").style.color = color;
    document.getElementById("x").innerText = text;
  document.getElementById("x").style.color = color;
  document.getElementsByTagName("body")[0].style.backgroundColor = bgcolor;

}