  var man_running,runner
  var pathimg,path
  var score

  function preload(){
  //pre-load images
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png")
  }

  function setup(){
  createCanvas(400,400);

  path = createSprite(200,200)
  path.addImage(pathimg)
  path.scale = 2.5;

  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",man_running);
  runner.velocityX = 4;
  runner.scale =0.08;

  

  left_boundary=createSprite(0,0,20,400);
  right_boundary = createSprite(390,0,20,400)
  left_boundary.visible=false;
  right_boundary.visible=false;
  }

    function draw() {
    background("lightgreen");

   path.velocity =4;

    runner.velocityX = runner.velocityX + 0.5;
  
   runner.x = mouseX;
    runner.collide(right_boundary);
    runner.collide(left_boundary);
    
    
    
    if (path.y> 400) {
    path.y = height/2
    }

    runner.collide(right_boundary)
    runner.collide(left_boundary)

    drawSprites();
  }
