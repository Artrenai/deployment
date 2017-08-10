<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/styles.css"/>
		<title>The Thingy That Does other Thingies</title>
	</head>
	<body>
		<h1>The Name Changer Thing-a-ma-BoB</h1>
		<p>
			This revolutionary App tells you what your name is by asking your name and then replacing my name with your
			name within the text below! You can change the color of said text <strong>5.... whole... Times!!!</strong>Also,
			It can change the font to Five rediculously Amazing fonts!
		</p>
		<!--the information being changed by events -->
		<p id="content">
			My name is <span id="name">Godfrey</span>
		</p>
		<!--color will change when button is pressed-->
		<button id="changeColorButton">Change Color</button>
		<!--font will change when button is pressed-->
		<button id="changeFontButton">Change Font</button>
		<!---user input to dynamically change Name-->
		<div>
			<label for="newName">Whats your name?</label>
			<input type="text" id="newName" name="newName" onchange="newName();" onkeyup="newName();"/>
		</div>
		<!-- had to put script at bottom because java script is depedent on events and values specifed in html -->
		<script src="js/script.js"></script>
	</body>
</html>