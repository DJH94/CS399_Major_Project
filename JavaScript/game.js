

var mycanv=document.getElementById("mycanvas");
					var ctx=mycanv.getContext("2d");
					ctx.fillStyle="orange";
					ctx.fillRect(0,0,mycanv.width,mycanv.height);
					
					var x =700;
					var gravity = 0.2;
					var friction = 0.8;
					var keys = [];
					var power = 100;
					document.body.addEventListener("keydown", function(e) {
						keys[e.keyCode] = true;
					});
 
					document.body.addEventListener("keyup", function(e) {
						keys[e.keyCode] = false;
					});
					
					var player = {
						x : 200,
						y : 300,
						width : 100,
						height : 100,
						speed : 3,
						velX : 0,
						velY : 0,
						jumping : false						
					};
					
					//http://www.giantflyingsaucer.com/blog/?p=1935
					var button = {
						x : 400,
						y : 300,
						width : 100,
						height : 50
					};
					
					var mouseX = 0;
					var mouseY = 0;
					//Listens for mouse events on the canvas
					mycanv.addEventListener("mousemove",seenmotion,false);
			
					//Implements mouse controls by detecting the cursor's x-axis movements on the canvas
					function seenmotion(e) {
						var bounding_box=mycanv.getBoundingClientRect();
						mouseX=(e.clientX-bounding_box.left) *((mycanv.width)/bounding_box.width);	
						mouseY=(e.clientY-bounding_box.top) *((mycanv.height)/bounding_box.height);	
					}
					
					function mouseInsideButtonBorder(button, mouseX, mouseY){
								if(((mouseX > button.x) && (mouseX < (button.x+button.width)))&&(((mouseY > button.y)) && (mouseY < (button.y+button.height)))){
									ctx.fillStyle("black");
									ctx.fillRect(400,300,100,50);
									return true;
								}
								else{
									return false;
								}
					}
					
					function start_game(){
						game_loop();
						
					}
					
					function game_loop(){
						 
						 animate();
						 
						 
					}
					
					function animate(){
						mycanv.width=mycanv.width;
						drawbox();
						drawPower();
						drawground();				
						requestID = requestAnimationFrame(animate);
						if(power == 0){
							 game_over();
						 }	
					}
					
					function game_over(){
						cancelAnimationFrame(requestID);
						ctx.fillStyle="yellow";
						ctx.fillRect(0,0,mycanv.width,mycanv.height);
						ctx.fillStyle="white";
						ctx.font="bold 50px sans-serif";
						ctx.fillText("Game Over", 400,200);
						drawButton();
						if(mouseInsideButtonBorder(button, mouseX, mouseY) == true){
							ctx.fillStyle("black");
							ctx.fillRect(400,300,100,50);
						}
					}
					
					function drawButton(){
						ctx.fillStyle= "red";
						ctx.fillRect(button.x, button.y, button.width, button.height);
					}
					
					function drawbox(){
						 ctx.fillStyle=("black");
						 ctx.fillRect(player.x, player.y, player.width, player.height);
						 keyMovement();
					}
					
					function keyMovement(){
						// check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {             
            player.velX++;         
         }     
    }     
    if (keys[37]) {         
        // left arrow         
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
 
    player.velX *= friction;
 
    player.velY += gravity;
 
    player.x += player.velX;
    player.y += player.velY;
 
    if (player.x >= mycanv.width-player.width) {
        player.x = mycanv.width-player.width;
    } else if (player.x <= 0) {         
        player.x = 0;     
    }    
  
    if(player.y >= mycanv.height-player.height){
        player.y = mycanv.height - player.height;
        player.jumping = false;
    }
	}
					
					function drawPower(){
						
						ctx.fillStyle=("red");
						power_drain();
						ctx.fillRect(20,20,(power*2),20);
						
						ctx.font="bold 10px sans-serif";
						ctx.fillText(power, 100,50);
					}	
					
					
					function power_drain(){
						if(power > 0){
							power -= 0.5;
						}
						else{
							power = 0;
						}
					}
					
					function calculate(){
						
							x = x - 5;
							if( x<-800){
								x = 800;
							}	
					}
					
					function collide(){
					//if the fruit hits the truck
					if (player.x > 400) return false;
					if (power <=0) return false; 
					}
					
					
					function horizontal(){
						if (player.velX < player.speed) {             
							player.velX++;   	
						}  
					 player.velX *= friction;	
					 player.x += player.velX;
					}
					
					function drawground(){
						 ctx.fillStyle=("green");
						 ctx.fillRect(x,400,800,100);
						 calculate();
						
					}
				