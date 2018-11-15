var xPos = 400;
var yPos = 0;
var sxPos = 0;
var syPos = 75;

draw = function() {
    background(29, 40, 115);
    
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos -= 15;
    yPos+= 2;
    
    ellipse(sxPos, syPos, 10, 10);
    sxPos += 15;
    syPos +=2;
    fill(184, 184, 184);
    rect(-1, 400, 59, -232);
    rect(72, 400, 78, -158);
    rect(173, 400, 80, -262);
    rect(311, 400, 66, -170);
};



