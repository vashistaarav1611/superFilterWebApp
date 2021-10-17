// nose
var nosex = 0;
var nosey = 0;
// right eye
var rightEyex = 0;
var rightEyey = 0;
// left eye
var leftEyex = 0;
var leftEyey = 0;
// right ear
var rightEarx = 0;
var rightEary = 0;
// left ear
var leftEarx = 0;
var leftEary = 0;
function preload(){
	
}
function setup(){
	canvas = createCanvas(500,500);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(500,500);
	video.hide();
	poseNet = ml5.poseNet(video,modelloaded);
	poseNet.on('pose', gotPoses);
}
function modelloaded(){
	console.log("poseNet fired");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		console.log("nose x "+results[0].pose.nose.x+" nose y "+results[0].pose.nose.y);
		// nose
		nosex = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
		// right eye
		rightEyex = results[0].pose.rightEye.x;
		rightEyey = results[0].pose.rightEye.y;
		// left eye
		leftEyex = results[0].pose.leftEye.x;
		leftEyey = results[0].pose.leftEye.y;
		// right ear
		rightEarx = results[0].pose.rightEar.x;
		rightEary = results[0].pose.rightEar.y;
		// left ear
		leftEarx = results[0].pose.leftEar.x;
		leftEary = results[0].pose.leftEar.y;
	}
}
function draw(){
	let a = color('red');
    fill(a);
	noStroke(); 
	image(video,0,0,500,500)
	circle(nosex,nosey,35);
	let b = color('white');
    fill(b);
	circle(rightEyex,rightEyey,45);
	let d = color('black');
    fill(d);
	circle(rightEyex,rightEyey,30);
	let c = color('white');
    fill(c);
	circle(leftEyex,leftEyey,45);
	let h = color('black');
    fill(h);
	circle(leftEyex,leftEyey,30);
	let s = color('yellow');
    fill(s);
	circle(rightEarx, rightEary, 50);
	circle(leftEarx, leftEary, 50);
	
}
function take_snapshot(){
	save("pic.png");
}