function changeColor() {
	var change={"colors": ["blue", "red", "green", "purple"], "fontFamilies":["Arial","Helvetica","Times NewRoman", "Impact"]};
	x = change.colors[0];
	y = change.fontFamilies[0];
	for(i= 0; i<change.colors.length; i++) {
		x += change.colors[i];
	}
	var colorChange = JSON.stringify(colorChange);
	document.getElementById("content").style.color = colorChange;

}

function changeFont() {
	document.getElementById("content").style.fontFamily = "Impact";
}

function newName() {
	document.getElementById("name").innerHTML = document.getElementById("newName").value;

}