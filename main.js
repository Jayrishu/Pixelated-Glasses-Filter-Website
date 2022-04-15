function preload(){
    pixelated_glasses = loadImage("https://i.postimg.cc/xCyGXJdy/31-u6-Zm-NPBL-AC-SY350-removebg-preview-1.png")
}
function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,600);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is loaded");
}
lefteyex=0;
righteyex=0;
lefteyey=0;
righteyey=0;
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        lefteyex = results[0].pose.leftEye.x;
        lefteyey = results[0].pose.leftEye.y;
        righteyex = results[0].pose.rightEye.x-40;
        righteyey = results[0].pose.rightEye.y-50;
    }
}
function draw(){
image(video,0,0,500,600);
image(pixelated_glasses,righteyex,righteyey,130,60);
}
function take_photo(){
    save("Pixelated_Glasses_Filter.png");
}