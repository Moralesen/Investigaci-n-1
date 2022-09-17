var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");
var x = cnv.width / 2;
var y = cnv.height/2;
var retning = 1;
var retnigy = 1;
var color = "";
function draw(){
    if(x + 5 > canvas.width){
        retning = 0;
        color = "red";
    }
    if (x - 5 < 0){
        retning = 1;
        color = "blue";
    }
    if (y + 5 > canvas.height){
        retnigy = 0;
        color = "yellow";
    }
    if (y - 5 < 0) {
        retnigy = 1;
        color = "green";
    }
    if (retning == 1){
        x += 10.9;
    }
    if (retnigy == 1){
        y += 10.9;
    }
    if (retnigy == 0){
        y -= 10.9;
    }
    if (retning == 0){
        x -= 10.9;
    }
    if(color == "red"){
        ctx.strokeStyle = "red";
    }
    else if(color == "blue"){
        ctx.strokeStyle = "purple";
    }
    else if(color == "yellow"){
        ctx.strokeStyle = "#f93883";
    }
    else if(color == "green"){
        ctx.strokeStyle = "blue"
    }
    else{
        ctx.strokeStyle = "red";
    }
    ctx.ellipse(x, y, 3, 5, 5, 5, 5,);
    ctx.stroke();
    ctx.fill();
}
var anim = function(){
    draw();
    requestAnimationFrame(anim);
};
anim();