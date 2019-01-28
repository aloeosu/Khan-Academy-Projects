var drawRange = function() {
background(143, 220, 255);
var incAmount = 0.01;


for (var x = 0; x < 401; x++)
{
    
    for (var y = 0; y < 200; y++){
        var sky = random(255);
        stroke(sky, sky, 180);
        point(x, y);
        
        
    }
}
    //far mountain
        for (var t = 0; t < incAmount*width*4; t += incAmount){
        var n = noise(t+10);
        var y = map(n, 0, 1, 150, height/1);
        noStroke();
        fill(156, 156, 156);
        rect(t*100, height-y, 1, y);
    }
    
    //close mountain
    
        var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 100, height/2);
        fill(122, 122, 122);
        rect(t*100, height-y, 1, y);
    }
    
    
    
    //trees
    for (var t = 0; t < incAmount*width*10; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 2, 0, height/1);
        
        fill(9, 115, 9);
        rect(t*10, height-y, 1, y);
    }
    for (var t = 0; t < incAmount*width*10; t += incAmount)     {
        var n = noise(t+10);
        var y = map(n, 0, 3, 0, height/1);
        fill(9, 148, 9);
        rect(t*10, height-y, 1, y);
    }
    for (var t = 0; t < incAmount*width*10; t += incAmount)     {
        var n = noise(t+100);
        var y = map(n, 0, 2, -79, height/1);
        fill(10, 171, 10);
        rect(t*10, height-y, 1, y);
    }
    
};

drawRange();
