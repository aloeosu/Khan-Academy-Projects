background(89, 216, 255);




var drawFish = function(centerX, centerY, bodyLength, bodyHeight, bodyColor){
noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
drawFish(200, 100, 118, 74, color(162, 0, 255));
drawFish(300, 200, 150, 90, color (255, 0, 0));
drawFish(300, 300, 80, 50, color (85, 255, 0));
drawFish(130, 290, 150, 90, color (255, 242, 0));
mouseClicked = function(){
    drawFish(mouseX, mouseY, random(50, 150), random(50, 100), color (255, 132, 0));
};
         
