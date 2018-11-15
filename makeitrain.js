//declaring arrays
var xPositions = [];
var yPositions = [];
//filling array
for(var x = 0; x < 26; x++){
    xPositions[x] = x * 17 + 3;
    yPositions[x] = floor(random(400));
}
mouseClicked = function(){
    xPositions.push(mouseX);
    yPositions.push(0);
  
    draw();
};
//drawing raindrops
draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 10;
        //drops start at top after they've reached bottom
        if(yPositions[i] > 400){
            yPositions[i] = 0;
        }
    }
    
};
