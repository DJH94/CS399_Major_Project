<!DOCTYPE HTML>
	<html>
		<head>
			<title>High Score</title>
			<link rel="stylesheet" href="design.css"/>
		</head>
		<body>
			<?php

				$username = "djh18";
				$pass = "jim0thy";

				try {
					$conn = new PDO('mysql:host=db.dcs.aber.ac.uk;dbname=cs399_15_16_djh18', $username, $pass);
                    
					// set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				}

                catch(PDOException $e){

                                echo "Connection failed: " . $e->getMessage();

                }

 

				#A little test
				if($conn){
					echo "woohoo";
				}
				else{
					echo "No connection";
				}
			?>
			<header>
				<h1>Top Scores</h1>
			</header>
				<?php include 'navbar.php'; ?>
			<section>
				<table>
					<tr>
						<th>Player</th>
						<th>Points</th>		
						<th>Date</th>
					</tr>
					<tr>
						<td>Jill</td>
						<td>Smith</td>		
						<td>50</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>Smith</td>		
						<td>50</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>Smith</td>		
						<td>50</td>
					</tr>
					<tr>
						<td>Jill</td>
						<td>Smith</td>		
						<td>50</td>
					</tr>
				</table>
				<p>This is where the high scores will be. Database results will be pulled here via PHP. Users can toggle results.</p>
			</section>
		</body>
	</html>