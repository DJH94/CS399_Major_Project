	<html>
		<head>
			<title>Game</title>
			<link rel="stylesheet" href="design.css"/>
		</head>
		<body onload="start_game()">
			<script src="facebook_API_Functionality.js"></script>
			<header>
				<h1>Trash Man</h1>
				<h2>"The world's most rubbish super villain"</h2>
				<div class="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false"></div>
			</header>
			<?php include 'navbar.php'; ?>
			<section>
				<canvas id="mycanvas" width="800" height="500" >Your Web browser does not support canvas. Please try again with a different browser.</canvas>
				<script src = "game.js"></script>
			</section>
		</body>
	</html>