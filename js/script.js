var Request;
//counts created to hold the value of how many clicks
var counter = 0;
var counterS = 0;
//listen for the button to be clicked then runs call to jason and execute desired results
var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeColor);
//gets Json Data and translates it to text dependent on object and array specifications
function changeColor() {
	Request = new XMLHttpRequest();
	Request.open('Get', 'changes.json');
	Request.onload = function() {
		var changes = JSON.parse(Request.responseText);
		//sends and recives data to JSon to display desired results, it changes dependent on value of counter
		document.getElementById("content").style.color = changes[0].colors[counter];

	};
	//resets value of counter based on array length (had to put in manually)
	if(counter === 3) {
		counter = 0;

	}
	else {
		counter++;
	}
	Request.send();
}
//listen for the button to be clicked then runs call to jason and execute desired results
document.getElementById("changeFontButton").addEventListener("click", changeFont);
//gets Json Data and translates it to text dependent on object and array specifications
function changeFont() {
	Request = new XMLHttpRequest();
	Request.open('Get', 'changes.json');
	Request.onload = function() {
		var changes = JSON.parse(Request.responseText);
		//sends and recives data to JSon to display desired results, it changes dependent on value of counter
		document.getElementById("content").style.fontFamily = changes[0].fontFamilies[counterS];

	};
	//resets value of counter based on array length (had to put in manually)
	if(counterS === 3) {
		counterS = 0;

	}
	else {
		counterS++;
	}
	Request.send();
}
// replaces text on call of function
function newName() {
	document.getElementById("name").innerHTML = document.getElementById("newName").value;

}
