noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/yNJSNvrV/mustache.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    console.log("pog");
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 35, 35);
}
function takeSnapshot(){
    save("name.png");
}
function modelLoaded(){
    console.log("PoseNet Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        noseX = noseX - 20;
        noseY = noseY - 15;
        console.log("nose x: " + noseX);
        console.log("nose y: " + noseY);
    }
}
