var garden,basket,apple,orange,pear,banana;
var gardenImg,basketImg,appleImg,orangeImg,pearImg,bananaImg ;
var orangef,applef,pearf,bananaf,basketgrp;
var score=0;

function preload(){
    gardenImg = loadImage("garden.png");
    basketImg = loadImage("basket.png");
    orangeImg = loadImage("fruit1.png");
    appleImg = loadImage("fruit2.png");
    pearImg = loadImage("fruit3.png");
    bananaImg = loadImage("fruit4.png");
}
function setup(){
  
    createCanvas(400,400);
    //create garden 
    garden=createSprite(200,200);
    garden.addImage(gardenImg);
    
    basket = createSprite(180,380,30,30);
    basket.scale =0.09;
    basket.addImage(basketImg);
    
    orangef = new Group();
    applef= new Group();
    pearf= new Group();
    bananaf = new Group();
    basketgrp = new Group();

    }
    
      function draw() {
      background(0);
      basket.x = World.mouseX; //basket moving on x axis with the help of mouse
      edges= createEdgeSprites();
      basket.collide(edges);
         
      var select_sprites = Math.round(random(1,4));
      if (frameCount % 80 == 0)
      {
        if(select_sprites == 1)
        {
          createorange()
        }
        else  if(select_sprites == 2) {
          createapple()
        }
        else  if(select_sprites == 3) {
          createpear();
        }
        else 
        {
          createbanana();
        }
      }
      
        //destroy the fruits
        if (orangef.isTouching(basket)){
            orangef.destroyEach();
            score = score + 1
        }
        else if (applef.isTouching(basket)){
            applef.destroyEach();
            score = score + 2
        }
        else if (pearf.isTouching(basket)){
            pearf.destroyEach();
            score = score + 1
        }
        else if (bananaf.isTouching(basket)){
            bananaf.destroyEach();
            score = score + 2
        }
drawSprites();
text("Score: "+ score, 200,100);

}

   
    function createorange()
    {
     
    var orange = createSprite(random(50, 350),40,10,10);
    orange.addImage(orangeImg); //add image to orange sprite
    orange.scale = 0.07;
    orange.velocityY = 20;
    orange.lifetime = 150;
    orangef.add(orange);
    }

    function createapple()
    {
      
    var apple = createSprite(random(50, 350),40,10,10);
    apple.addImage(appleImg); 
    apple.scale = 0.07;
    apple.velocityY = 20;
    apple.lifetime = 150;
    applef.add(apple);
    }
    
    function createpear()
    {
      
    var pear = createSprite(random(50, 350),40,10,10);
    pear.addImage(pearImg); 
    pear.scale = 0.07;
    pear.velocityY = 20;
    pear.lifetime = 150;
    pearf.add(pear);
    }
    
    function createbanana()
    {
    var banana = createSprite(random(50, 350),40,10,10);
    banana.addImage(bananaImg); 
    banana.scale = 0.07;
    banana.velocityY = 20;
    banana.lifetime = 150;
    bananaf.add(banana);
    }