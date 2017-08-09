function changeColor() {
	function colorArray() {
		var change = {
			"colors": ["blue", "red", "green", "purple"],
			"fontFamilies": ["Arial", "Helvetica", "Times NewRoman", "Impact"]
		};
		var x = [0];
		for(var i = 0; i < change.colors.length; i++) {
			x += change.colors[i];
		}
	}
	JSON.stringify(colorArray());
	document.getElementById("content").style.color = colorArray();

}

function changeFont() {
	document.getElementById("content").style.fontFamily = "Impact";
}

function newName() {
	document.getElementById("name").innerHTML = document.getElementById("newName").value;

}