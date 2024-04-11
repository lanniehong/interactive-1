let apples = 20;
let oranges = 4;
let message = "";

if (apples >= oranges) {
	message = "same number of apples and oranges.";
}

// output to html elem
document.getElementById('text').innerText = message
