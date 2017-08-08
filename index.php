<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="css/styles.css"/>
		<script src="js/script.js"></script>
	</head>
	<body>
		<div id="content">
			My name is <span id="name">Godfrey</span>
		</div>
		<button type="button" onclick="changeColor();">Change Color</button>
		<button type="button" onclick="changeFont();">Change Font</button>
		<div>
			<label for="newName">Whats your name?</label>
			<input type="text" id="newName" name="newName" onchange="newName();" onkeyup="newName();"/>
		</div>
	</body>
</html>