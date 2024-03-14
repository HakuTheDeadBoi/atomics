let Player = {};

Player.listen = function() {
    document.body.addEventListener("click", Player.click);
}

Player.click = function(e) {
    let position = Draw.getPosition(e.target);
    if (!position) {return;}
    let [x, y] = [position[0], position[1]];
    Board[x][y]++;
    Draw.all();
}