var games = [
    {
        title: "Mario Kart",
        stars: 5,
        author: "Nintendo",
        color: color(255, 0, 0),
    },
    {
        title: "Call of Duty",
        stars: 5,
        author: "Treyarch",
        color: color(40, 43, 56),
    },
    {
        title: "Pokemon",
        stars: 5,
        author: "Nintendo",
        color: color(36, 122, 252),
    },
    {
        title: "osu!",
        stars: 5,
        author: "Dean Herbert",
        color: color(247, 156, 255),
    }
    
];

// draw shelf
background(161, 103, 42);
for (var j = 0; j < 2; j++){
fill(173, 117, 33);
rect(0, j * 170 + 120, width, 10);
}
// draw games
for (var a = 0; a < games.length; a++){
    var game = games[a];
    fill(game.color);
    rect(10 + a * 96, 20, 90, 100);
    fill(0, 0, 0);
    text(game.title, 15 + a * 103, 29, 70, 100);
    //author
    text(game.author, 15 + a * 103, 45, 70, 100);
    fill(0, 0, 0);
    //stars
    for (var i = 0; i < game.stars; i++) {
        image(getImage("cute/Star"), 13 + (a * 96) + (i *          16), 90, 20, 30);
    }
}

