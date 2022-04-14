function preload(){
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
        righteyex = results[0].pose.rightEye.x;
        righteyey = results[0].pose.rightEye.y;
    }
}
function draw(){
image(video,0,0,500,600);
}
function take_photo(){
    save("Pixelated_Glasses_Filter.png");
}