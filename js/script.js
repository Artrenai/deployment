var Request;
var counter = 0;
var counterS = 0;
var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeColor);

function changeColor() {
	Request = new XMLHttpRequest();
	Request.open('Get', 'changes.json');
	Request.onload = function() {
		var changes = JSON.parse(Request.responseText);
		document.getElementById("content").style.color = changes[0].colors[counter];

	};
	if(counter === 3) {
		counter = 0;

	}
	else {
		counter++;
	}
	Request.send();
}

document.getElementById("changeFontButton").addEventListener("click", changeFont);

function changeFont() {
	Request = new XMLHttpRequest();
	Request.open('Get', 'changes.json');
	Request.onload = function() {
		var changes = JSON.parse(Request.responseText);
		document.getElementById("content").style.fontFamily = changes[0].fontFamilies[counterS];

	};
	if(counterS === 3) {
		counterS = 0;

	}
	else {
		counterS++;
	}
	Request.send();
}

function newName() {
	document.getElementById("name").innerHTML = document.getElementById("newName").value;

}
