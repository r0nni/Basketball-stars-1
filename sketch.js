var LeBronImage, StephImage
var Basketball
var player1, player2
var ground
var hoop1, hoop2
var ball
var background, crowd, bubble, scoreboard

function preload(){
LeBronImage = loadImage("assets/LeBron.png ")
StephImage = loadImage("assets/curry.png")
BasketballImage = loadImage("assets/Basketball.png")
Hoop1 = loadImage("assets/hoop1.png")
Hoop2 = loadImage("assets/hoop2.png")
Background = loadImage("assets/Background.png")
Bubble = loadImage('assets/bubble.png')
Crowd = loadImage('assets/Crowd.jpeg')
Scoreboard = loadImage('assets/Scoreboard.webp')
}

function setup(){
createCanvas(2000,1000)
}


function draw(){
background('tan')


backwall = createSprite(954,450,1840,30)
backwall.shapeColor = 'black'

bubble = createSprite(990,678,30,30)
bubble.addImage(Bubble)
bubble.scale = 3.4

ground = createSprite(1000,900,2000,30)
ground.shapeColor='black'

crowd = createSprite(320,210,100,100)
crowd.addImage(Crowd)
crowd.scale = 1.8

crowdMiddle = createSprite(958,210,100,100)
crowdMiddle.addImage(Crowd)
crowdMiddle.scale = 1.8

crowdRight = createSprite(1600,210,100,100)
crowdRight.addImage(Crowd)
crowdRight.scale = 1.8
hoop1 = createSprite(360,370,30,600)
hoop1.addImage(Hoop1)
hoop1.scale = 8

outline = createSprite(1000,200,200,200)
outline.shapeColor = 'black'

pole = createSprite(1000,100,15,200)
pole.shapeColor = 'grey'

scoreboard = createSprite(1000,200,100,100)
scoreboard.addImage(Scoreboard)
scoreboard.scale = 0.4



hoop2 = createSprite(1550,370,30,600)
hoop2.addImage(Hoop2)
hoop2.scale = 8

ball = createSprite(1000,600,30,30)
ball.addImage(BasketballImage)
ball.scale = 0.5

backwhitewall = createSprite(954,500,1800,10)
backwhitewall.shapeColor = 'white'

frontwhitewall = createSprite(954,850,1800,10)
frontwhitewall.shapeColor = 'white'

rightwhitewall = createSprite(59,675,10,360)
rightwhitewall.shapeColor ='white'

leftwhitewall = createSprite(1850,675,10,360)
leftwhitewall.shapeColor = 'white'

player1 = createSprite(500,620,50,50)
player1.addImage(LeBronImage)
player1.scale=0.65

player2 = createSprite(1500,600,50,50)
player2.addImage(StephImage)
player2.scale = 0.7







drawSprites()
}

