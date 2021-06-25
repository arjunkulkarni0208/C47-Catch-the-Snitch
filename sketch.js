var snitchImage, harryImage, harry, snitch, cloudImage, snitchGroup
var draco, dracoImage, dementors, dementorsImage, malfoyGroup, dementorsGroup
var  ground ,groundImage

function preload(){
    snitchImage = loadImage("snitch_image.png")
    harryImage = loadImage("harry.png")
    groundImage = loadImage("ground.png")
    dracoImage = loadImage("Draco.png")
    cloudImage = loadImage("cloud.png")
    dementorsImage = loadImage("dementors.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    ground = createSprite(width/2,height,width,20)
    ground.addImage("ground",groundImage)
    ground.x = ground.width/2
    harry = createSprite(200, 200, 20, 20)
    harry.addImage("harry",harryImage)
    snitch = createSprite(400, 200, 10, 10)
    snitch.addImage("snitch",snitchImage)

    snitchGroup = new Group()
    malfoyGroup = new Group()
    dementorsGroup = new Group()
}

function draw(){
    background("lightBlue")
    ground.velocityX = -5
    edges = createEdgesSprites()
    harry.collide(edges)
    if(ground.x < 500){
        ground.x = ground.width/2
    }

    if(keyWentDown("Up_Arrow")){
        harry.velocityY = -4
    }

    if(keyWentDown("Down_Arrow")){
        harry.velocityY = 4
    }

    spawnCloud()
    spawnDementors()
    spawnMalfoy()
    drawSprites()
}
function spawnCloud(){
    if(frameCount % 100 === 0){
        var cloud = createSprite(1210,random(82,300),40,10)
        cloud.addImage("cloud",cloudImage)
        cloud.velocityX = -5
        cloud.scale = 3
    }
}

function spawnDementors(){
    if(frameCount % 100 === 0){
        dementors = createSprite(1210,random(70,350),20,20)
        dementors.addImage("dementors",dementorsImage)
        dementors.velocityX = -15
        dementorsGroup.add(dementors)
    }
}

function spawnMalfoy(){
    if(frameCount % 250 === 0){
        draco = createSprite(1210,random(70,350),20,20)
        draco.addImage("draco",dracoImage)
        draco.velocityX = -10
        malfoyGroup.add(draco)
    }
}

function spawnSnitch(){
    if(frameCount % 100 === 0){
        snitch = createSprite(1210,random(70,350),20,20)
        snitch.addImage("snitch",snitchImage)
        snitch.velocityX = -13
        snitchGroup.add(snitch)
    }
}