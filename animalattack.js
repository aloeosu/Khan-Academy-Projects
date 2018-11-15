//jumping monkey
var bodyX = 200;
var bodyY = 438;
var bodyW = 118;
var bodyH = bodyW/2;
var bodyHe = 106;

 
draw = function() {
    background(207, 254, 255);
    fill(128, 119, 72);
    ellipse(bodyX-25, bodyY+68, bodyH-30, bodyHe-20);//right leg
    ellipse(bodyX+25, bodyY+68, bodyH-30, bodyHe-20);//left leg
    ellipse(bodyX+-90,bodyY-29, bodyH+40, bodyHe-76);//right arm
    ellipse(bodyX+90,bodyY-29, bodyH+40, bodyHe-76);//left arm
    ellipse(bodyX, bodyY, bodyW, bodyHe); // body
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW-20, bodyHe-20);//abdomen
    fill(128, 119, 72); 
    ellipse(bodyX -30, bodyY-70, bodyH-29, 30);//right ear
    ellipse(bodyX +30, bodyY-70, bodyH-29, 30);//left ear
    ellipse(bodyX, bodyY-70, bodyH, bodyHe-59); // head
    fill(240, 209, 36);
    ellipse(bodyX, bodyY-67, bodyH-15, bodyHe-69);//face
    fill(0, 0, 0);
    ellipse(bodyX-15, bodyY-75, bodyH-54, bodyHe-101);//right eye
    ellipse(bodyX+15, bodyY-75, bodyH-54, bodyHe-101);//left eye
    ellipse(bodyX, bodyY-60, bodyH-39, bodyHe-86);//mouth
    fill(240, 209, 36);
    
    
    
   bodyHe=bodyHe+0.3;
   bodyH=bodyH+0.3;
   bodyY=bodyY-8;
   
};


