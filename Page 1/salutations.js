let greeting = document.getElementById('greeting');
let title = document.getElementById('title');

setInterval(function() {
	if (greeting.innerText === "Bonjour") {
		greeting.innerText = "Hello";
		title.style.color = "blue";
	} else {
		greeting.innerText = "Bonjour";
		title.style.color = "#fff";
	}
}, 1000);