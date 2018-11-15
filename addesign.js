draw= function() {
    background(255, 255, 255);
    fill(242, 125, 0);
    textSize(30);
    text("Super Grippy Basketball!", 40, 40);//product name
    textSize(10);
    text("SO GRIPPY! YOUR HAND (CURSOR) WILL NEVER LOSE GRIP OF BALL!", 40, 87);//top text
    text("GET YOURS TODAY!!", 145, 337);//bottom text
    fill(255, 132, 0);
    ellipse(mouseX, mouseY, 80, 80);//ball
    fill(0, 0, 0);
    strokeWeight(3);
    line(mouseX - 38, mouseY, mouseX +38, mouseY);//middle     line
    noFill();
    arc(mouseX, mouseY - 7, 80, 40, -150, -28);//top arc
    arc(mouseX, mouseY + 7, 80, 40, 32, 150);//bottom arc
};
