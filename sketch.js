const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

function preload(){

}

function setup(){
    createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;

    ground=new Ground(600,580,1200,20);
    base1=new Ground(625, 520, 300, 15);
    base2=new Ground(1025, 420, 300, 15);


    // -----------------------------------for Base 1 (a)---------------------

    block1a=new Block(500,497,40,40);
    block2a=new Block(540,497,40,40);
    block3a=new Block(580,497,40,40);
    block4a=new Block(620,497,40,40);
    block5a=new Block(660,497,40,40);
    block6a=new Block(700,497,40,40);
    block7a=new Block(740,497,40,40);

    block8a=new Block(560-20,466,40,40);
    block9a=new Block(600-20,466,40,40);
    block10a=new Block(640-20,466,40,40);
    block11a=new Block(680-20,466,40,40);
    block12a=new Block(720-20,466,40,40);

    block13a=new Block(580,436,40,40);
    block14a=new Block(620,436,40,40);
    block15a=new Block(660,436,40,40);

    block16a=new Block(620,406,40,40);
    
    // block17a=new Block(600,406,30,30);
    // block18a=new Block(640,406,30,30);
    // block19a=new Block(580,375,30,30);
    // block20a=new Block(620,375,30,30);

    // block21a=new Block(600,345,30,30);


    // ----------------------------------------For base 2 (b)--------------------------

    block1b=new Block(900,397,40,40);
    block2b=new Block(940,397,40,40);
    block3b=new Block(980,397,40,40);
    block4b=new Block(1020,397,40,40);
    block5b=new Block(1060,397,40,40);
    block6b=new Block(1100,397,40,40);
    block7b=new Block(1140,397,40,40);

    block8b=new Block(960-20,366,40,40);
    block9b=new Block(1000-20,366,40,40);
    block10b=new Block(1040-20,366,40,40);
    block11b=new Block(1080-20,366,40,40);
    block12b=new Block(1120-20,366,40,40);

    block13b=new Block(980,336,40,40);
    block14b=new Block(1020,336,40,40);
    block15b=new Block(1060,336,40,40);

    block16b=new Block(1020,306,40,40);

    // block17b=new Block(1000,306,30,30);
    // block18b=new Block(1040,306,30,30);

    // block19b=new Block(980,275,30,30);
    // block20b=new Block(1020,275,30,30);

    // block21b=new Block(1000,245,30,30);

    stone=new HexagonalStone(200,400,50,50);
    rope=new SlingShot(stone.body, {x:200,y:400});

    Engine.run(engine);
}

function draw(){
    background("#3C2E2E");

    Engine.update(engine);

    fill("green");
    ground.display();

    base1.display();
    base2.display();

    fill("lightblue");
    block1a.display();
    block2a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block6a.display();
    block7a.display();
    
    fill("yellow");
    block8a.display();
    block9a.display();
    block10a.display();
    block11a.display();
    block12a.display();

    fill("orange");
    block13a.display();
    block14a.display();
    block15a.display();

    fill("brown");
    block16a.display();

    // block17a.display();
    // block18a.display();

    // fill("red");
    // block19a.display();
    // block20a.display();

    // fill("lightgreen");
    // block21a.display();



    fill("lightblue");
    block1b.display();
    block2b.display();
    block3b.display();
    block4b.display();
    block5b.display();
    block6b.display();
    block7b.display();
    
    fill("yellow");
    block8b.display();
    block9b.display();
    block10b.display();
    block11b.display();
    block12b.display();

    fill("orange");
    block13b.display();
    block14b.display();
    block15b.display();

    fill("brown");
    block16b.display();

    // block17b.display();
    // block18b.display();

    // fill("red");
    // block19b.display();
    // block20b.display();

    // fill("lightgreen");
    // block21b.display();

    fill(255);
    textSize(30);
    text("Draw the hexagonal stone and release it, to launch it towards blocks", 100,100);

    stone.display();
    rope.display();

    // detectCollision(stone, block1a);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stone.body, {x:200,y:400});
        rope.attach(stone.body);
    }
}

function detectCollision(lstone, lblock){
    blockBodyPosition=lblock.body.position;
    stoneBodyPosition=lstone.body.position;

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, blockBodyPosition.x, blockBodyPosition.y);
    if (distance<=lmango.r+lblock.r){
        Matter.Body.setStatic(lblock.body, false);
    }
}