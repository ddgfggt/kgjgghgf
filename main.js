function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
	//img=loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');
	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log("modelLoaded");
}
function gotPoses(results){
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
}
function draw() {
	game();
}