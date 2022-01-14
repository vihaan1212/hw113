function preload() {
    
}
function setup(){
    canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){

}
function takeSnapshot(){
    save('practice.png')
}