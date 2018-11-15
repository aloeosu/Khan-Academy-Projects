//sky
background(219, 236, 255);
//roof
fill(66, 66, 66);
triangle(200, 28, 360, 150, 40, 150);
fill(179, 179, 179);
triangle(200, 38, 350, 150, 50, 150);
ellipse(200, 213, 250, 250);
//white lines
stroke(255, 255, 255);
//house body
fill(176, 95, 95);
rect(60, 150, 280, 207);
//brick color
fill(176, 95, 95);
//first pattern of bricks
for(var a = 150; a < 331; a += 20){
    for(var f = 60; f < 330; f+=20){
    rect(f, a, 20, 10);
    }
}
//second pattern of bricks
for(var a = 160; a < 322; a += 20){
    for(var f = 70; f < 330; f+=20){
    rect(f, a, 20, 10);
    }
}
//bottom
noStroke();
fill(158, 158, 158);
rect(60 ,337, 280, 20);
//windows
stroke(0, 0, 0);
for (var i = 98; i < 330; i+=83)
{
    rect(i, 178, 34, 38);
}


fill(225, 250, 243);

for (var i = 100; i < 330; i+=83)
{
    rect(i, 180, 30, 34);
}
//door
fill(120, 80, 19);
rect(178, 280, 40, 77);
fill(255, 242, 0);
ellipse(212, 320, 10, 10);
//grass
for (var j = 0; j < 400; j+=100){
    
    image(getImage("cute/GrassBlock"),j, 307); 
}
